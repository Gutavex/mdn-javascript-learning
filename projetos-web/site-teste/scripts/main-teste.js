const myHeading = document.querySelector("h1");
myHeading.textContent = "Olá mundo!";

console.log(myHeading.textContent);
console.log(myHeading);

let myVariable;
myVariable = "Bob";
console.log(myVariable);

// Funções
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

// Eventos
document.querySelector("html").addEventListener("click", function() {
    alert("Cuidado! Clique com moderação!");
  });

// Usando função de seta x anonima
// Basicamente foi removida a expressão "function" e adicionado a seta "=>"
document.querySelector("html").addEventListener("click", () => {
  alert("Ai! Pare de me cutucar!");
});
