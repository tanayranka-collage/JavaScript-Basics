// code by tanay ranka sycse b 8
document.title = "Program 10 - Grades";
const ans = document.getElementById("cs");
let va = prompt("Enter your marks (0-100): ");
let f = Number(va);
ans.style.color = "#02ff00";
if(!isNaN(f)){
    if(f > 95){
        ans.innerText = "Grade A+";
    }else if(f > 90){
        ans.innerText = "Grade A";
    }else if(f > 80){
        ans.innerText = "Grade B";
    }else{
        ans.innerText = "Grade F";
    }
}else{
    ans.innerText = "Give a number";
}
