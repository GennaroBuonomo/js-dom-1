// Dichiarazione funzione
const lampadina = document.getElementById("lampadina");
const myButton = document.getElementById("myButton");

console.log(lampadina)
// stato iniziale
let accesa = false; 

myButton.addEventListener("click", function(){
if (accesa) {
  // spenta
  lampadina.src = './img/white_lamp.png';
  accesa = false;
} else {
  // accesa
  lampadina.src = "./img/yellow_lamp.png";
  accesa = true
}
})
