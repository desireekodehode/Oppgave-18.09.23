// function giveRandomwords() {

//   const giveWords () 
//   [ "En", 
//   "to", 
//   "tre", 
//   "fire",
//    "fem"];
// }

// console.log()

// function tall() {
//     document.getElementById("randomElementOutPut").textContent = "Array" 
// }
// console.log()

function give() { 
    const compliment = [
        "Hallo!", 
        "Du er god!",
        "Dette blir så bra",
        "Sola skinner, tenk!",
    ];
   
console.log(compliment)

const randomIndex = Math.floor(Math.random() * compliment.length)
const compliments = compliment[randomIndex];

document.getElementById("jsOutput").textContent = compliments

console.log([])

    // let randomIndex = Math.floor(Math.random() * compliment.length)
    // return randomIndex



}
console.log(give())