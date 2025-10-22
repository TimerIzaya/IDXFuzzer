import time

if __name__ == '__main__':

    t0 = time.time()
    while True:
        if time.time() - t0 > 4:
            break
        # 每间隔0.1s读一次全部文件
        time.sleep(2)
