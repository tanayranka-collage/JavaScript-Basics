// oce by tanay ranka sycse b 8
document.title = "Program 3 - Area of Triangle";
const ans = document.getElementById("cs");
let va = prompt("Enter height: ");
let da = prompt("Enter Breath: ");
let f = Number(va) + Number(da);
ans.style.color = "#02ff00";

if(!isNaN(f)){
    re = 0.5 * va * da;
    ans.innerText = re.toFixed(2);
}else{
    ans.innerText = "Give a number";
}
