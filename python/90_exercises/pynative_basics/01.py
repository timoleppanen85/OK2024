# Exercise 1: Calculate the multiplication and sum of two numbers

def main():
    number1 = int(input("Enter first number:"))
    number2 = int(input("Enter second number:"))

    if (number1 * number2 <= 1000):
        print(number1 * number2)
    else:
        print(number1 + number2)


if __name__ == "__main__":
    main()
