// code by tanay ranka sycse b 8
document.title = "Program 6 - C to F";
const ans = document.getElementById("cs");
let va = prompt("Enter Temp in Celcius: ");
let f = Number(va);
ans.style.color = "#02ff00";

if(!isNaN(f)){
    let F = (va * 9/5) + 32;
    ans.innerText = `${F.toFixed(2)} °F`;
}else{
    ans.innerText = "Give a number";
}
