# Exercise 15: Write a function called exponent(base, exp) that returns an int value of base raises to the power of exp.

def main():
    exponent(2, 5)
    exponent(5, 4)


def exponent(base, exp):
    if exp > 0:
        print(base ** exp)
    else:
        print("Exponent must be of the positive sort")


if __name__ == "__main__":
    main()
