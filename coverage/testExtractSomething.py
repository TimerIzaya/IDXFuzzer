from minidump.minidumpfile import MinidumpFile

dump = MinidumpFile.parse("dmpFiles/f0ccd401-43b4-4079-9001-db160017b463.dmp")
if dump.misc_info and dump.misc_info.command_line:
    print(dump.misc_info.command_line)