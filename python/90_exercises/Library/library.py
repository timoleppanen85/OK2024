import uuid
import os

action = "list"


def main():
    library = Library()
    user_input = ""

    print("WELCOME TO THE PUBLIC LIBRARY")

    while user_input != "q" and user_input != "exit":
        if action == "list":
            print(
                "(L)ist books \t (T)ake out books \t (R)eturn books \t (Q)uit \t (A)dd new book")
            user_input = input("Make a selection:")
            match user_input:
                case "list" | "l": list_books(library.books, "list")
                case "take" | "t": list_books(library.books, "takeout")
                case "return" | "r": list_books(library.books, "return")
                case "add" | "a": add_book(library)
                case _: pass
        elif action == "takeout":
            print("Enter VALID ID of book you want to take out or (Q)uit")
            user_input = input("Make a selection:")
            if user_input.isnumeric():
                take_book(library.books, user_input)
            else:
                pass
        elif action == "return":
            print("Enter ID for the book you are returning or (Q)uit")
            user_input = input("Make a selection:")
            if user_input.isnumeric():
                return_book(library.books, user_input)
            else:
                pass


def add_book(library):
    print("Add new book")
    name = input("Book title:")
    author = input("Book author:")
    pages = input("Number of pages:")
    genre = input("Book genre:")

    book = Book(uuid.uuid4().hex, name, author, int(pages), genre, True)

    library.add_book(book)


def take_book(books, book_id):
    os.system("cls")
    id = int(book_id)

    if id >= len(books):
        print("VERY BAD SELECTION, please go away")
    elif (books[id].available == 1):
        books[id].available = 0
        print("Book", books[id].name, "has been taken out")
    else:
        print("Bad selection, try again")

    global action
    action = "list"


def return_book(books, book_id):
    os.system("cls")
    id = int(book_id)

    if id >= len(books):
        print("VERY BAD SELECTION, please go away")
    elif (books[id].available == 0):
        books[id].available = 1
        print("Book", books[id].name, "has been returned, thank you")
    else:
        print("Bad selection, try again")

    global action
    action = "list"


def list_books(books, action_passed):
    name_tabs = 1
    author_tabs = 1
    genre_tabs = 1

    global action
    action = action_passed

    # helper variable for returning and taking out books
    if action == "takeout":
        availability = 1
    else:
        availability = 0

    os.system("cls")

    print("#"*100)
    print("#"*40, "Selection of books", "#"*40)
    print("#"*100)

    # Filler for headers
    if action == "list":
        print("-"*6, "Title", "-"*32, "Author",
              "-"*8, "Pages", "-"*5, "Genre", "-"*9, "Available", "-"*10, sep="")
    else:
        print("-"*6, "Title", "-"*32, "Author",
              "-"*8, "Pages", "-"*5, "Genre", "-"*9, "Available", "-"*7, "ID", sep="")

    for index, book in enumerate(books):
        if (action != "list" and book.available == availability) or action == "list":
            # Tabs for book list
            if len(book.name) > 32:
                pass
            elif len(book.name) > 22:
                name_tabs = 2
            elif len(book.name) > 14:
                name_tabs = 3
            elif len(book.name) > 7:
                name_tabs = 4
            else:
                name_tabs = 5

            if len(book.author) < 8:
                author_tabs = 2

            if len(book.genre) < 6:
                genre_tabs = 2

            print("%.40s" % book.name,
                  "\t"*name_tabs,
                  "%.15s" % book.author,
                  "\t"*author_tabs,
                  "%.5s" % book.pages, "\t",
                  "%.15s" % book.genre,
                  "\t"*genre_tabs, ("Not available", "Available")[book.available], end="")

            if action == "list":
                print("")
            else:
                print("\t", index)

            name_tabs = 1
            author_tabs = 1

    print("")


class Book:
    def __init__(self, id, name, author, pages, genre, available) -> None:
        self.id = id
        self.name = name
        self.author = author
        self.pages = pages
        self.genre = genre
        self.available = available


class Library:
    def __init__(self) -> None:
        self.books: list[Book] = [
            Book(uuid.uuid4().hex, "How to cook that",
                 "Mr. T", 12, "Cooking", True),
            Book(uuid.uuid4().hex, "How to cook this",
                 "Mr. T", 6, "Cooking", False),
            Book(uuid.uuid4().hex, "How NOT to cook that",
                 "Mr. Steve", 36, "Cooking", True),
            Book(uuid.uuid4().hex, "Thousand ways to cook that",
                 "Harold Cooper", 126, "Cooking", True),
            Book(uuid.uuid4().hex, "Even I wouldn't eat that",
                 "Bear Grylls", 785, "Survival", False)
        ]

    def add_book(self, book):
        self.books.append(book)


if __name__ == "__main__":
    main()
