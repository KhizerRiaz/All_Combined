
from numpy import average


x = []
inputs = int(input("Enter Number Of Values"))

for i in range(inputs):
    val = int(input("Enter Number"))
    x.append(val)
mean = average(x)
for i in range(len(x)):
    sumsquared = pow((x[i]-mean),2)

print("Standard Deviation = ",sumsquared/len(x))