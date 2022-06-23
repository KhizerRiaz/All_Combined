package main

import (
	"fmt"
	"math"
)

func quadratic(a float64, b float64, c float64) {
	fmt.Println("a : ", a)
	fmt.Println("b : ", b)
	fmt.Println("c : ", c)

	// calculate the roots of the polynomial
	// x^2 + bx + c using the quadratic formula

	discriminant := (b * b) - (4 * a * c)
	d := math.Sqrt(discriminant)

	fmt.Printf("%0.6f\n", ((-b + d) / (2 * a)))
	fmt.Printf("%0.6f\n", ((-b - d) / (2 * a)))
}

func main() {
	quadratic(4.0, 5.0, 1.0)
}