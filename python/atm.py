#Atm programing...
balance=1000
def deposit():
    global balance
    amount= int(input("enter deposit amount:-" ))
    if amount>0:
       balance+=amount
       print("amount deposit succesfully...")
       print("new balance:-",balance)
    else:
        print("invalid amount ! ")

def withdraw():
        global balance
        amount=int(input("enter withdrawal amount..."))
        if amount<0:
            print("invalid amount")
        elif amount > balance:
            print("insufficiant balance..!")
        else:
            balance-=amount
            print("collect your cash..")
            print("remaining balance..",balance)
def check_balance():
    print("your balance :-",balance)

    #atm menu for show in display...
while True:
    print ("\n.....ATM MENU.....")
    print("1. Deposit")
    print("2. withdraw")
    print("3. Check Balance")
    print("4. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        deposit()
    elif choice == "2":
        withdraw()
    elif choice == "3":
        check_balance()
    elif choice == "4":
        print("Thank you for using ATM!")
        break
    else:
        print("Invalid choice!")
    
