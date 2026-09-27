print("....electricity bill....")
amount=float(input("enter your amount.."))
if amount<=100:
   bill= amount*5
   print(bill)
elif amount<=200:
    bill=amount*7
    print("balance",bill)
elif amount<=300:
    bill=amount*10
    print("balance",bill)
else:bill=amount*12
print("balance=",bill)