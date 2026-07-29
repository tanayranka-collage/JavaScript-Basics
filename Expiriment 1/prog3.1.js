// code by tanay ranks sycse b 8
document.title = "Program 3 - Area or circle";
const ans = document.getElementById("cs");
let va = prompt("Enter radius for a circle: ");
let f = Number(va);
ans.style.color = "#02ff00";

const pi = 3.1415;

if(!isNaN(f)){
    re = pi * f * f;
    ans.innerText = re.toFixed(2);
}else{
    ans.innerText = "Give a number";
}
