import math
def loanPayment(p , r , n):
    if type(p) == str or type(r) == str or type(n) == str:
        raise ValueError("String type not supported")
        
    X=float((1+r)**(n-1))
    Y=(1+r)**n
    a=float(p*((r*(X))/Y))
    a=float("{:.2f}".format(a))
    return float(a)
    # print("Payment amount per period : " ,a)

