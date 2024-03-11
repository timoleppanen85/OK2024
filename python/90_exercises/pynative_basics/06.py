# Exercise 6: Display numbers divisible by 5 from a list

def main():
    numbers = [10, 20, 33, 46, 55]

    print("Given list is", numbers)
    print("Divisible by 5")

    for num in numbers:
        if num % 5 == 0:
            print(num)


if __name__ == "__main__":
    main()
