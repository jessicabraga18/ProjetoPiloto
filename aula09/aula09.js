let titulo = document.querySelector('h1');
titulo.textContent = 'Aula 09 Manipular CSS' //innerHTML mesma função
//Manipulando a imagem
let imagem = document.querySelector("#foto");
imagem.setAttribute('src','pride-fc.jpg');
imagem.setAttribute('width','280px');

//Manipular o CSS dua maneiras abaixo
//document.querySelector('h1').style.color = "orange" ;
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "5px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius ="5px"

//