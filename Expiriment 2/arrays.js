// code by tanay ranka sycse b 8
const lis = document.getElementById("e");
const x = document.createElement("li");
const x2 = document.createElement("li");
const x3 = document.createElement("li");
const x4 = document.createElement("li");
const x5 = document.createElement("li");

let arr = [];
const len = Number(prompt("Enter a Max Length: "));
for(let i=0; i<len;i++){
    arr.push(Number(prompt(`Enter ${i+1} value: `)));
}
const f = Number(prompt("enter elemnet to push: "));
console.log(arr);
x.innerText = "Array: " + "[ " + arr + " ]";
x2.innerText = "Length: " + arr.length;
arr.pop();
x3.innerText = "Arr after Pop(): " + arr;
arr.sort();
x4.innerText = "Sorted Array: " + arr;
arr.push(f);
x5.innerText = "ARrray after pushing: " + arr;



lis.appendChild(x);
lis.appendChild(x2);
lis.appendChild(x3);
lis.appendChild(x4);
lis.appendChild(x5);
