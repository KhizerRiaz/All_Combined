
def taylorExpansion(x , numOfTerms):
    if type(x) == str or type(numOfTerms) == str:
        raise ValueError("String type not supported")
    
    # x=int(input("Input Value of x:"))
    # numOfTerms=int(input("Input number of terms:"))
    x = int(x)
    numOfTerms = int(numOfTerms)
    fact = 1
    sum = 0.0

    for i in range(1, numOfTerms):
        fact= fact * i
        sum = sum+(pow(x, i)/fact)

    sum = sum + 1
    # print("The answer is ",sum)

    
        # x = int(input("Enter value of x:"))
        # numOfTerms = int(input("Enter number of terms: "))



    fact = 1
    sum = 0.0

    for i in range(1, numOfTerms):
        fact= fact * i
        sum = sum+(pow(x, i)/fact)

    sum = sum + 1
    return sum
    
        # print("Invalid Input. Please try again.")


# print(taylorExpansion())