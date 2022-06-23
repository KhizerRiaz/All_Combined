package main

import (
	"fmt"
)
func f(x float64 , y float64)float64{
	return x + y
}

func euler()[]float64{
	var x float64
	var y float64
	var b float64
	
    fmt.Println("Enter Value of x: ")
	fmt.Scanln(&x)
    fmt.Println("Enter value of y: ")
    fmt.Scanln(&y)
    fmt.Println("Enter step size (b): ")
    fmt.Scanln(&b)

	n := 5.0

	h := (b-x)/n
	arrX := []float64{x}
	arrY := []float64{y}
	// fmt.Println(arrX , arrY)
	fmt.Println(arrX[len(arrX) - 1] , b)
	// arrX = append(arrX, 10)
	for float64(arrX[len(arrX) - 1])< b{
		// fmt.Println("arr")

		arrX = append(arrX, float64(arrX[len(arrX) - 1]) + float64(h))
	}
	
	for index := range arrX{
		arrY = append(arrY , arrY[len(arrY) - 1] + (h * f(arrX[index] , arrY[index])))
	}
	return arrY
}

func main(){
	fmt.Println(euler())
}