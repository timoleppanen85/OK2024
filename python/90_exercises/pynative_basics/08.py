# Exercise 8: Print the following pattern
# 1
# 2 2
# 3 3 3
# 4 4 4 4
# 5 5 5 5 5

def main():

    for num in range(1, 6):
        for i in range(num):
            print(num, end=" ")
        print("")


if __name__ == "__main__":
    main()
