// code by tanay ranka sycse b 8


document.title = "Program 11 - greatest of 3 num";

const ans = document.getElementById("cs");
ans.style.color = "#02ff00";
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");
let f = Number(a) + Number(b) + Number(c);
if(!isNaN(f)){
    if(a > b && a > c){
        ans.innerText = `${a} is greatest`;
    }else if(b > a && b > c){
        ans.innerText = `${b} is greatest`;
    }else{
        ans.innerText = `${c} is greatest`;
    }
}else{
    ans.innerText = "Give a number";
}

