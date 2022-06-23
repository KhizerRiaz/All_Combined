

function relativity(M,v,c) {
//   const c = 299792458; // m/s
  var generalRelativity = M * Math.pow(c,2);
  var LF_sub = 1-(v/Math.pow(c,2));
  var lorentzFactor = Math.pow(LF_sub,(1/2));
  var r = generalRelativity / lorentzFactor;
//    return r;
    // console.log(r);
document.querySelector(".output-div").textContent = r;
ex = document.getElementById('c');

if(ex.value != ''){
    document.querySelector(".output-div").textContent = r;
    document.querySelector(".error-message").textContent=""
}
else{
    document.querySelector(".output-div").textContent = "";
    document.querySelector(".error-message").textContent = "Enter all values to compute relativity"
}
} 

// relativity(12,30);
// document.getElementById("event_button").addEventListener("click", function(){
//     var mass = document.getElementById("mass_box").value;
//     var velocity = document.getElementById("velocity_box").value;

//     mass = parseFloat(mass);
//     velocity = parseFloat(velocity);
// 	var result = relativity(mass, velocity);
//     document.getElementById("result").value = result ;
//     event.preventDefault();
// });