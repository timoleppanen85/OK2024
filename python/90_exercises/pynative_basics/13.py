# Exercise 13: Print multiplication table from 1 to 10

def main():
    for i in range(1, 11):
        for j in range(1, 11):
            print(i * j, end=" ")
        print("")


if __name__ == "__main__":
    main()
