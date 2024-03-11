def main():
    mylist = ["apple", "banana", "orange", "apple"]
    print(mylist)

    mylist.append("lemon")
    print(mylist)

    mylist_copy = mylist.copy()
    mylist.extend(mylist_copy)
    print(mylist)

    myslice = mylist[3:]
    print(myslice)

    mytuple = ("apple", "banana", "orange")
    print(mytuple)

    mydict = {
        "brand": "lenovo",
        "model": "Thinkpad",
        "screen": 15.4
    }

    print(mydict)
    print(mydict["brand"])

    for key in mydict:
        print(key)

    for value in mydict.values():
        print(value)

    myset = {"apple", "banana", "lemon", 1, 2, 3}
    print(myset)

    myset.add(100)
    print(myset)


if __name__ == "__main__":
    main()
