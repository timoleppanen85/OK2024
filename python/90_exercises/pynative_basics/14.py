# Exercise 14: Print a downward Half-Pyramid Pattern of Star (asterisk)

def main():
    for i in range(5, 0, -1):
        for j in range(0, i):
            print("*", end=" ")
        print("")


if __name__ == "__main__":
    main()
