
//Quardratic Formula 

quard = (a,b,c) => {
    var result = []
    let x1 = (-b + Math.pow(b*b - 4*a*c , 0.5) ) / (2*a)
    let x2 = (-b - Math.pow(b*b - 4*a*c , 0.5) ) / (2*a)
    result.push (x1)
    result.push (x2)
    return result
}

console.log (quard(1,2,-15))