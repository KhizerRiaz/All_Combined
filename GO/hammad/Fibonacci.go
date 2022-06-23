package main

import "fmt"
func fib(n int)(int){
    // function body.....
 if(n<=1) {
   /* statement(s) will execute if the boolean expression is true */
   return n
} else {
   /* statement(s) will execute if the boolean expression is false */
   return(fib(n-1)+fib(n-2))
}
}
func main(){
   var a int
   a=fib(7)
   fmt.Println(a)
}