// code by tanay ranka sycse b 8
document.title = "Program 6 - F to C";
const ans = document.getElementById("cs");
let va = prompt("Enter Temp in Farenheit: ");
let f = Number(va);
ans.style.color = "#02ff00";

if(!isNaN(f)){
    let F = (va - 32) * 5/9;
    ans.innerText = `${F.toFixed(2)} °C`;
}else{
    ans.innerText = "Give a number";
}
