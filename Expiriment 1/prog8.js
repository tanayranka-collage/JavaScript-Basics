// code by tanay ranka sycse b 8
document.title = "Program 8 - Electricity Bill";
const ans = document.getElementById("cs");
let va = prompt("Enter total units consumed: ");
let x = prompt("Enter cost per unit: ");
let f = Number(va) + Number(x);
ans.style.color = "#02ff00";

if(!isNaN(f)){
    let t = x * va;
    ans.innerText = `₹${t.toFixed(2)}`
}else{
    ans.innerText = "Give a number";
}
