// code by tanay ranka sycse b 8
document.title = "Program 2";
const ans = document.getElementById("cs");
let va = prompt("Enter a number: ");
let f = Number(va);
ans.style.color = "#02ff00";
if(!isNaN(f)){
    if(f >= 0){

        ans.innerText = "Positive number";
    }else{
        ans.innerText = "Negative number";
    }
}else{
    ans.innerText = "Give a number";
}
