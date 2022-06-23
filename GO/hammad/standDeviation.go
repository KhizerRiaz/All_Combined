package main

import (
	"fmt"
	"math"
)
func main(){
	var sum float64 = 0
	var size int;
	
	fmt.Scanln(&size)
	fmt.Println("Your Array Size is ",size)
	var arr[]float64;

	for i:=0;i<size; i++ {
		var in float64;
		fmt.Scanln(&in)
		arr = append(arr,in)
	}

	fmt.Println("Your Array",arr)

	for i:=0;i<size; i++ {
		sum += arr[i]
	}
	var mean float64 = sum/(float64(size))
	fmt.Println("Mean = ",mean)
	var sse float64 = 0.0;
	for i:=0;i<size; i++ {
		j:=arr[i]-mean
		sse += math.Pow(j,2)
	}


	fmt.Println("Standard Deviation = ",sse/float64(size))
}