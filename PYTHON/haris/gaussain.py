from scipy import integrate
import numpy as np
import math

def gaussain(xsquare):
    if type(xsquare) == str:
        raise ValueError("String type not supported")
    
    try:
        # print("TO TYPE 2x^2 ENTER IN THE FORMAT: 2*x**2")
        # print("TO TYPE 2x ENTER IN THE FORMAT: 2*x")
        # xsquare = int(input("ENTER VALUE FOR X SQUARE: "))
        gfg = lambda x: np.exp(-x**xsquare)
        geek = integrate.quad(gfg, np.NINF, np.inf)

        # print(geek[0])
        return geek[0]

    except: 
        print("DO NOT GIVE NEGATIVE VALUES OR INVALID VALUES")

# gaussain()