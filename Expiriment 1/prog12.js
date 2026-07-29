// code bny tnaay ranka sycse b 8

document.title = "Program 12 - Basic Calculator";

const ans = document.getElementById("cs");
ans.style.color = "#02ff00";
let a = prompt("Calculator\n\rEnter first number: ");
let b = prompt("Calculator\n\rEnter second number: ");
let c = prompt("Enter the Operation (+,-,*,/)");
let f = Number(a) + Number(b);
if (!isNaN(f)){
    switch (c){
        case '+':
            ans.innerText = a + b;
            break;
        case '-':
            ans.innerText = a - b;
            break;
        case '*':
            ans.innerText = a * b;
            break;
        case '/':
            ans.innerText = a / b;
            break;
        default:
            ans.innerText = "Give a valid input.";

    }
}else{
    ans.innerText = "Give a number.";
}
