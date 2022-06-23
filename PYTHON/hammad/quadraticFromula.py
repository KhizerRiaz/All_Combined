
#Quardratic Formula 
def Quardratic_Formula (a, b, c):
    # print ("Enter values for a, b, and c: ")
    try:
        result = []
        x1 = (-b + (b*b - 4*a*c) ** (0.5) ) / (2*a)
        x2 = (-b - (b*b - 4*a*c) ** (0.5) ) / (2*a)
        result.append (x1)
        result.append (x2)
        # print ("Result:", result)
    except:
        print("please enter numeric data")
    return x1, x2
