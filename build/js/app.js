
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