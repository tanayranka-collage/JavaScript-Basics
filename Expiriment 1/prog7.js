// occe by tanay ranka sycse b 8
document.title = "Program 7 - Leap Years";
const ans = document.getElementById("cs");
let va = prompt("Enter a Year: ");
let f = Number(va);
ans.style.color = "#02ff00";

if(!isNaN(f)){
    if(f % 4 == 0 && f < 3000){
        ans.innerText = "It is a Leap Year";
    }else{
        ans.innerText = "It is NOT a Leap Year";
    }
}else{
    ans.innerText = "Give a number";
}
