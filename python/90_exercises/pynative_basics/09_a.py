# Exercise 9: Check Palindrome Number

def main():
    check_palindrome(121)
    check_palindrome(125)


def check_palindrome(number):
    print("Original number", number)
    original_number = number
    reverse_number = 0

    while number > 0:
        reminder = number % 10
        reverse_number = (reverse_number * 10) + reminder
        number = number // 10

    if original_number == reverse_number:
        print("Number is palindrome")
    else:
        print("Number is not palindrome")


if __name__ == "__main__":
    main()
