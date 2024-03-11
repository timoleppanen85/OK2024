# Exercise 2: Print the sum of the current number and the previous number

def main():
    numbers = range(10)
    last_number = 0
    sum = 0

    for num in numbers:
        sum = num + last_number
        print("Current Number", num, "Previous Number", last_number, "Sum", sum)
        last_number = num


if __name__ == "__main__":
    main()
