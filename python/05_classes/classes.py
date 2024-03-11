class Person:
    def __init__(self, name, age):
        self.age = age
        self.name = name

    def greet(self, name):
        print("Hello", name, ". My name is", self.name)

    def __str__(self):
        return ""+str(self.age)+" "+self.name


class Employee(Person):
    def __init__(self, name, age, job):
        super().__init__(name, age)
        self.job = job

    def greet(self, name):
        print("Hello", name, ". My name is",
              self.name, " and I work as a", self.job)


def main():
    p = Person("Muumipappa", 25)
    p.greet("Haisuli")
    print(p)
    e = Employee("Nipsu", 145, "Juntti")
    e.greet("Haisuli")
    print(e)


if __name__ == "__main__":
    main()
