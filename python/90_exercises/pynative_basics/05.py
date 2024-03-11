# Exercise 5: Check if the first and last number of a list is the same

def main():
    numbers_x = [10, 20, 30, 40, 10]
    numbers_y = [75, 65, 35, 75, 30]

    compare_list(numbers_x)
    compare_list(numbers_y)


def compare_list(list):
    print("Given list:", list)
    if list[0] == list[len(list) - 1]:
        print("Result is True")
    else:
        print("Result is False")


if __name__ == "__main__":
    main()
