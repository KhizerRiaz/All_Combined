
def slope_formula(x11,x22,y11,y22):
    gradient= (y22-y11)/(x22-x11)
    return gradient
def slp(x1,x2,y1,y2):
    
    Output=slope_formula(x1,x2,y1,y2)
    print("The slope of the given formula is:",Output)

    return Output

result = slp(5,4,3,2)
