import sqlite3

create_table_sql = """CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname VARCHAR(20),
    lastname VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(20)
)"""

get_contacts_sql = "SELECT * FROM contacts"

add_new_contact_sql = "INSERT INTO contacts(firstname, lastname, email, phone) VALUES(?, ?, ?, ?)"

remove_row_sql = "DELETE FROM contacts WHERE id=?"

edit_row_sql = "UPDATE contacts SET firstname=?, lastname=?, email=?, phone=? WHERE id=?"


def get_connection():
    conn = None
    try:
        conn = sqlite3.connect("database.db")
        return conn
    except:
        print("Fail to connect to database")
    return conn


def create_contact_table():
    conn = get_connection()
    if conn == None:
        return None

    try:
        c = conn.cursor()
        c.execute(create_table_sql)
        print("Succesfully created table")
        return "Success"
    except:
        print("Failed to create table")
    return None


def get_contacts():
    conn = get_connection()
    if conn == None:
        return None

    try:
        c = conn.cursor()
        contacts = c.execute(get_contacts_sql)
        return contacts.fetchall()
    except:
        print("Failed to get contacts")
    return None


def add_new_contact(data):
    conn = get_connection()
    if conn == None:
        return None

    try:
        c = conn.cursor()
        data_tuple = (data["firstname"], data["lastname"],
                      data["email"], data["phone"])
        c.execute(add_new_contact_sql, data_tuple)
        conn.commit()
        return "Success"
    except:
        print("Failed to add new contact")
    return None


def remove_contact(id):
    conn = get_connection()
    if conn == None:
        return None

    try:
        c = conn.cursor()
        c.execute(remove_row_sql, (id, ))
        conn.commit()
        return "Success"
    except:
        print("Failed to remove contact")
    return None


def edit_contact(data, id):
    conn = get_connection()
    if conn == None:
        return None

    try:
        c = conn.cursor()
        data_tuple = (data["firstname"], data["lastname"],
                      data["email"], data["phone"], id)
        c.execute(edit_row_sql, data_tuple)
        conn.commit()
        return "Success"
    except:
        print("Failed to edit contact")
    return None
