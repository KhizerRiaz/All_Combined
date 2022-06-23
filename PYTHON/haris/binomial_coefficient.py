def binomial(x , y):
    from math import factorial as fac

    # print("\nBinomial Coefficient Calculator. \n\nSample Values: 8,3 = 56\n")
    if type(x) == str or type(y) == str:
        raise ValueError("String type not supported")

    try:    
        # print('\nBinomial Coefficient:', fac(x) // fac(y) // fac(x - y))
        return (fac(x) // fac(y) // fac(x - y))

        # x = int(input("Enter First Integer: "))
        # y = int(input("Enter Second Integer: "))
    except:
        print("Input type is not an integer or a -ve value")
      
# print(binomial(10 , 2))      


