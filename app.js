const Colores = ["red", "green", "blue", "yellow", "black", "violet", "orange"];
const Palabras = [,];
Palabras[0] = ["ROJO", "VERDE", "AZUL", "AMARILLO", "NEGRO", "BLANCO", "VIOLETA", "NARANJA"];
Palabras[1] = ["LIBRE", "SUELTO", "AQUI", "AHORA", "SOY", "FELIZ", "TENGO", "PODER", "CONSCIENTE", "ACTO", "APTO", "DISCIPLINA", "FLUYO", "GLORIA", "SI", "TRES", "DOS", "UNO"];
const PalabrasSalidas = [];
const snd = new Audio("./metronomo.mp3");

const speedContainer = document.querySelector("#speedContainer");

let timer;
let inicio = false;
let count = 0;

const PalabraH1 = document.querySelector("h1");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");


document.body.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
});

startBtn.addEventListener("click", (e) => {
  stop();
  document.querySelector(".appMain").requestFullscreen();
  contadorInicial(3);
});

stopBtn.addEventListener("click", (e) => {  
  stop();
});


