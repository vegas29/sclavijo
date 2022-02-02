
function openNav() {
  document.querySelector("#myNav").style.width = "100%";
}

function closeNav() {
  document.querySelector("#myNav").style.width = "0%";
}

/*Interfaz nocturna*/

function nochePaz(){
  document.querySelector('body').classList.toggle("bodyNight");
  document.querySelectorAll('.menu__item')[1].classList.toggle("sun");
}

/* Modal Imagenes*/

let modal = document.getElementById("myModal");

let img = document.getElementById("myImg1");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

let imagensrc = document.querySelectorAll('.portfolio__button')[11].parentNode.firstElementChild.firstElementChild.alt;
let imagenalt = document.querySelectorAll('.portfolio__button')[11].parentNode.firstElementChild.firstElementChild.alt;

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = imagensrc;
  captionText.innerHTML = imagenalt;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}