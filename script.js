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

function give()  { 
    let antallkompliment = compliment.length
    const randomIndex = Math.floor(Math.random() * compliment.length)
    const compliment = compliment[randomIndex];
    return compliment
}
const compliment = [
    "Hallo", 
    "Du er god",
    "Dette blir bra",
    "Sola skinner"
];

console.log(give())