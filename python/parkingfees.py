def bike():
    if hours == 1:
        print("Pay 20 rs")

    elif hours == 2:
        print("Pay 20 rs")

    elif hours == 3:
        print("Pay 40 rs")

    elif hours == 4:
        print("Pay 50 rs")

    elif hours > 4:
        extra_hours = hours - 4
        fee = 50 + (extra_hours * 10)
        print("Pay", fee, "rs")

    else:
        print("Invalid hours")


def car():
    if hours == 1:
        print("Pay 40 rs")

    elif hours == 2:
        print("Pay 60 rs")

    elif hours == 3:
        print("Pay 80 rs")

    elif hours == 4:
        print("Pay 100 rs")

    elif hours > 4:
        extra_hours = hours - 4
        fee = 100 + (extra_hours * 10)
        print("Pay", fee, "rs")

    else:
        print("Invalid hours")


# Input
hours = int(input("Enter parking hours: "))
vehicle = input("Enter your vehicle name: ").lower()



if vehicle == "bike":
    bike()

elif vehicle == "car":
    car()

else:
    print("Wrong vehicle!")
    print("Please check and try again!")