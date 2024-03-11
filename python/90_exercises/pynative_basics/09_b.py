# Exercise 9: Check Palindrome Number

def main():
    check_palindrome(121)
    check_palindrome(125)


def check_palindrome(number):
    original = number
    reversed_number = ""

    for num in reversed(str(number)):
        reversed_number = reversed_number + num

    if original == int(reversed_number):
        print("Number is palindrome")
    else:
        print("Number is not palindrome")


if __name__ == "__main__":
    main()
