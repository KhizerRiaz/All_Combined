package main

import (
	"fmt"
	"math"
	"math/cmplx"
)

func eulerIdentityFunction() complex128 {
	total := 0 + 0i
	total = cmplx.Exp(math.Pi*1i) + 1.0
	return total
}