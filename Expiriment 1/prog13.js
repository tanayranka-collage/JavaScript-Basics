// code by tanay ranka sycse b 8

document.title = "Program 13 - Triangle definition";

const ans = document.getElementById("cs");
ans.style.color = "#02ff00";

let a = prompt("Enter first side length: ");
let b = prompt("Enter second side length: ");
let c = prompt("Enter third side length: ");
let f = Number(a) + Number(b) + Number(c);

if (!isNaN(f)){
    if(a != b && b != c && c != a){
        ans.innerText = "It is a Scalene Triangle";
    }else if (a == b && b == c && c == a){
        ans.innerText = "It is Equilateral Triangle";
       
    }else{
        ans.innerText = "It is Isoceles Triangle";
    }
}else{
    ans.innerText = "Give a number.";
}
