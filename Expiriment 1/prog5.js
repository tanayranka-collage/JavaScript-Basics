// code by tanay ranka sycse b 8
document.title = "Program 5 - Voting rights";
const ans = document.getElementById("cs");
let va = prompt("Enter your Age: ");
let f = Number(va);
ans.style.color = "#02ff00";

if(!isNaN(f)){
    if(va >= 18 && va < 123){
        ans.innerText = "You Are Eligible for Voting";
    }else{
        ans.innerText = "You Are NOT Eligilbe for Voting";
    }
}else{
    ans.innerText = "Give a number";
}
