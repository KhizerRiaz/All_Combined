package main

import (
	"fmt"
	"math"
)

func Quadratic_formula() {
	var a float64
	var b float64
	var c float64

	var result [2]float64
	fmt.Println("Enter Values for a, b and c : ")
	fmt.Scanln(&a)
	fmt.Scanln(&b)
	fmt.Scanln(&c)

	result[0] = (-b + math.Pow((b*b-4*a*c), (0.5))) / (2 * a)
	result[1] = (-b - math.Pow((b*b-4*a*c), (0.5))) / (2 * a)

	fmt.Println("\nx1:", result[0])
	fmt.Println("x2:", result[1])
	fmt.Println()
}

func main() {
	Quadratic_formula()
}
