
#Quardratic Formula 
def Quardratic_Formula ():
    print ("Enter values for a, b, and c: ")
    try:
        a= float(input ("a:"))
        b = float(input ("b:"))
        c = float(input ("c:"))
        
        print ("a:",a)
        print ("b:",b)
        print ("c:",c)

        result = []
        x1 = (-b + (b*b - 4*a*c) ** (0.5) ) / (2*a)
        x2 = (-b - (b*b - 4*a*c) ** (0.5) ) / (2*a)
        result.append (x1)
        result.append (x2)
        print ("Result:", result)
    except:
        print("please enter numeric data")
    return

Quardratic_Formula()