# Exercise 4: Remove first n characters from a string

def main():
    remove_chars("pynative", 4)
    remove_chars("pynative", 2)


def remove_chars(string, number):
    string = string[number:]
    print(string)


if __name__ == "__main__":
    main()
