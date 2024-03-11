# Exercise 11: Write a Program to extract each digit from an integer in the reverse order.
# For example, If the given int is 7536, the output shall be “6 3 5 7“, with a space separating the digits.

def main():
    reverse_value(7536)
    reverse_value(572375)


def reverse_value(value):
    print("Given number", value)

    while value > 0:
        digit = value % 10
        value = value // 10
        print(digit, end=" ")

    print("")


if __name__ == "__main__":
    main()
