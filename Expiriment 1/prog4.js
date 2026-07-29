// code b tanay ranka sycse b 8
document.title = "Program 4 - odd or even";
const ans = document.getElementById("cs");
let va = prompt("Enter a number: ");
let f = Number(va);
ans.style.color = "#02ff00";

if(!isNaN(f)){
    if(va % 2 == 0){
        ans.innerText = "EVEN number";
    }else{
        ans.innerText = "ODD number";
    }
}else{
    ans.innerText = "Give a number";
}
