import paramiko
import os
import tempfile

class RemoteExecutor:
    def __init__(self, hostname, username, key_path):
        self.hostname = hostname
        self.username = username
        self.key_path = key_path
        self.client = None
        self.sftp = None

    def connect(self):
        if self.client is None or not self.client.get_transport().is_active():
            self.client = paramiko.SSHClient()
            self.client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            self.client.connect(
                hostname=self.hostname,
                username=self.username,
                key_filename=self.key_path,
                timeout=5
            )
            self.sftp = self.client.open_sftp()

    def exec(self, command, timeout=10):
        self.connect()
        stdin, stdout, stderr = self.client.exec_command(command, timeout=timeout)
        out = stdout.read().decode()
        err = stderr.read().decode()
        return out, err

    def download_bin_files(self, remote_dir: str, local_dir: str):
        self.connect()
        os.makedirs(local_dir, exist_ok=True)
        for filename in self.sftp.listdir(remote_dir):
            if filename.startswith("sancov_bitmap_") and filename.endswith(".bin"):
                remote_path = os.path.join(remote_dir, filename)
                local_path = os.path.join(local_dir, filename)
                self.sftp.get(remote_path, local_path)
                self.sftp.remove(remote_path)  # 清理远程bin文件

    def close(self):
        if self.sftp:
            self.sftp.close()
        if self.client:
            self.client.close()
