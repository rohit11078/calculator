def shoping():
    print(".....billing.....")

    amount = float(input("Enter amount = "))

    if amount <= 500:
        bill = 0
        final = bill + amount
        print("Final amount =", final)
        print("Thanks for shopping\nVisit again")

    elif amount <= 1000:
        bill = amount * 10 / 100
        print("10% discount applicable..", bill)
        final = amount - bill
        print("Final amount =", final)
        print("Thanks for shopping\nVisit again")

    elif amount <= 3000:
        bill = amount * 20 / 100
        print("20% discount applicable..", bill)
        final = amount - bill
        print("Final amount =", final)
        print("Thanks for shopping\nVisit again")

    elif amount <= 5000:
        bill = amount * 30 / 100
        print("30% discount applicable..", bill)
        final = amount - bill
        print("Final amount =", final)
        print("Thanks for shopping\nVisit again")

    else:
        bill = amount * 50 / 100
        print("50% discount applicable..", bill)
        final = amount - bill
        print("Final amount =", final)
        print("Thanks for shopping\nVisit again")


while True:
    shoping()

    choice = input("Billing again yes/no = ")

    if choice == "yes":
        continue
    else:
        print("End")
        break