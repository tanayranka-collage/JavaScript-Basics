// code b tanay ranka sycse b 8
document.title = "Program 9 - Gross Salary";
const ans = document.getElementById("cs");
let va = prompt("Enter your salary: ");
let f = Number(va);
ans.style.color = "#02ff00";
if(!isNaN(f)){
    let t = (0.15 * f) + f;
    ans.innerText = `₹${t.toFixed(2)}`
}else{
    ans.innerText = "Give a number";
}
