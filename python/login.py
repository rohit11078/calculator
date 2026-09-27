name = input("Enter your name:- ")
password = input("Enter your password:- ")

attempt = 1

while attempt <= 3:

    if name == "rohit" and password == "1234":
        print("Successfully Login")
        break

    else:
        print("Wrong username or password")
        attempt = attempt + 1

        if attempt <= 3:
            name = input("Enter username again:- ")
            password = input("Enter password again:- ")

        else:
            print("Account Locked")