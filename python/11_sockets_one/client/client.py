import socket


def client():
    host = socket.gethostname()
    port = 15000

    client_socket = socket.socket()
    client_socket.connect((host, port))

    message = input('->')

    while message.lower().strip() != "exit":
        client_socket.send(message.encode())
        data = client_socket.recv(1024).decode()

        print("Server tells us", data)
        message = input('->')

    client_socket.close()


if __name__ == "__main__":
    client()
