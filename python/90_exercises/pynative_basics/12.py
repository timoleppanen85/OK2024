# Exercise 12: Calculate income tax for the given income by adhering to the rules below
# Taxable Income	Rate (in %)
# First $10,000	    0
# Next $10,000	    10
# The remaining	    20

def main():
    calculate_taxes(45000)


def calculate_taxes(income):
    print("Income", income)
    taxes = 0

    if income <= 10000:
        print("Taxes stolen by the goverment: $0")
    elif income <= 20000:
        taxes = (income - 10000) * 0.1
        print("Taxes stolen by the goverment: $", taxes, sep="")
    else:
        taxes = (10000 * 0.1) + (income - 20000) * 0.2
        print("Taxes stolen by the goverment: $", taxes, sep="")


if __name__ == "__main__":
    main()
