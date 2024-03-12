import uuid


def main():
    library = Library()
    user_input = ""

    print("WELCOME TO THE PUBLIC LIBRARY")

    while user_input != "q" and user_input != "exit":
        print("(L)ist books \t (T)ake out books \t (R)eturn books \t (Q)uit")
        user_input = input("Make a selection:")
        match user_input:
            case "list" | "l": list_books(library.books)
            case _: pass


def take_book():
    return ""


def return_book():
    return ""


def list_books(books):
    name_tabs = 1
    author_tabs = 1

    print("#"*100)
    print("#"*40, "Selection of books", "#"*40)
    print("#"*100)
    print("-"*6, "Title", "-"*32, "Author",
          "-"*8, "Pages", "-"*5, "Genre", "-"*9, "Available", "-"*10, sep="")

    for book in books:
        if len(book.name) > 32:
            pass
        elif len(book.name) > 22:
            name_tabs = 2
        else:
            name_tabs = 3

        if len(book.author) < 8:
            author_tabs = 2

        print("%.40s" % book.name,
              "\t"*name_tabs,
              "%.15s" % book.author,
              "\t"*author_tabs,
              book.pages, "\t",
              "%.15s" % book.genre,
              "\t", ("Not available", "Available")[book.available])
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
