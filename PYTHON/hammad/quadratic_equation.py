import cmath  
import unittest

def quadratic(a,b,c):
    
        
    # calculate the discriminant  
    d = (b**2) - (4*a*c)  
    
    # find two solutions  
    sol1 = (-b-cmath.sqrt(d))/(2*a)  
    sol2 = (-b+cmath.sqrt(d))/(2*a)  
    print('The solution are {0} and {1}'.format(sol1,sol2)) 

    return [sol1 , sol2]



result = quadratic(5,3,0)
