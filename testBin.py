import sys

def count_ones_in_bitmap(file_path):
    try:
        with open(file_path, 'rb') as f:
            data = f.read()

        total_ones = sum(bin(byte).count('1') for byte in data)
        print(f"[✓] Total 1-bits in bitmap: {total_ones}")

    except FileNotFoundError:
        print(f"[✗] File not found: {file_path}")
    except Exception as e:
        print(f"[✗] Error: {e}")

if __name__ == "__main__":
    bitmap_file = "testBin.py"
    count_ones_in_bitmap(bitmap_file)
