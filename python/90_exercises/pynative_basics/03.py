# Exercise 3: Print characters from a string that are present at an even index number

def main():
    user_input = input("Enter string ")

    print("Original String is", user_input)

    for char in user_input[0::2]:
        print(char)


if __name__ == "__main__":
    main()
