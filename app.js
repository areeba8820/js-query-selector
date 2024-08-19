function sum(a, b){
    return a + b;
}
console.log(sum(3, 8));


const multiplication = (I, b) =>{
    return I*b;

}
console.log(multiplication(4,8));



let div_elememt = document.querySelector("div")
console.log(div_elememt);
let att = div_elememt.getAttribute("class")
console.log(att);


// let paragraph = document.querySelector("p");
// console.log(paragraph.setAttribute("id", "paragraph_one"));


let paragraph = document.querySelector("p");
paragraph.style.backgroundColor = "blue"
paragraph.style.color = "orange"


let newBtn = document.createElement("button");
newBtn.innerText = "submit";
console.log(newBtn);

let add = document.querySelector("div");
// add.append(newBtn)
// add.prepend(newBtn)
// add.before(newBtn)
add.after(newBtn)