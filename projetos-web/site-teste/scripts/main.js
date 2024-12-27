const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/official-tech-background-style.png") {
    myImage.setAttribute("src", "images/noticia-news1.jpg");
  } else {
    myImage.setAttribute("src", "images/official-tech-background-style.png");
  } 
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
    // const myName = prompt("Por favor, digite o seu nome");
    // localStorage.setItem("name", myName);
    // myHeading.textContent = `Mozilla é legal, ${myName}`;
  }
  
//   EXPLICAÇÕES:
// o código chama uma API localStorage, que nos permite armazenar dados no navegador e recuperá-los posteriormente. 
// Usamos a função setItem() do localStorage para criar e armazenar um item de dados chamado 'name', 
// configurando seu valor para a variável myName que contém a entrada do usuário para o nome. Por fim, 
// definimos o textContent do cabeçalho como uma string, mais o nome do usuário recém-armazenado.

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storedName}`;
   } // Pode ser usado para armazenar o nome do usuário no navegador
  
myButton.onclick = () => {
    setUserName();
  };
  