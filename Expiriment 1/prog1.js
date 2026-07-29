// code by tabay ranka sycse b 8

document.title = "Program 1";
const ans = document.getElementById("cs");
let va = Number(prompt("Enter a number: "));
let fa = Number(prompt("Enter second Number: "));
let f = va + fa;
if(isNaN(f)){
    ans.style.color = "lime";
    ans.innerText = "Give Numerical inputt";
}else{
    ans.style.color = "green";
    ans.innerText = f;
}
