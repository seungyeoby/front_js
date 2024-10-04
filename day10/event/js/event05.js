// input
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button")
console.log(inputs);
// for(let i = 0; i<inputs.length; i++){
//     // inputs[i].style.fontSize = "25px";
//     // inputs[i].style.border = "solid 2px black";
//     // inputs[i].style.width = "200px";
//     inputs[i].style.height = "40px";    
// }

inputs.forEach((list) => {
    list.style.fontSize = "25px";
    list.style.border = "solid 2px blue";
    list.style.width = "200px";
    list.style.height = "40px"; 

    list.addEventListener("blur",(e)=>{
        console.log(e.target.value)
    })
})

button.addEventListener("click", (e)=>{
    inputs.forEach((input)=>{
        console.log(input.value)
    })
})