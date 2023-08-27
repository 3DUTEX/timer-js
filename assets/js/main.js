const numTimer = document.querySelector("#numTimer");
const btnIniciar = document.querySelector("#btnIniciar");
const btnPausar = document.querySelector("#btnPausar");
const btnZerar = document.querySelector("#btnZerar");

let seconds = "00";
let minutes = "00";
let hour = "00";

let myInterval = setInterval(timer, 0);
clearInterval(myInterval);

function formatTimer() {
  seconds = Number(seconds);
  minutes = Number(minutes);
  hour = Number(hour);

  if (seconds > 59) {
    seconds = 0;
    minutes++;
    return;
  }

  if (minutes > 59) {
    minutes = 0;
    hour++;
    return;
  }

  if (hour >= 24) {
    seconds = 0;
    minutes = 0;
    hour = 0;
    return;
  }
}

function formatNumber(num) {
  return num < 10 ? "0" + num : num;
}

function timer() {
  seconds++;
  formatTimer();

  numTimer.innerText = `${formatNumber(hour)}:${formatNumber(
    minutes
  )}:${formatNumber(seconds)}`;
}

//botão iniciar
btnIniciar.addEventListener("click", () => {
  numTimer.className = "default";
  myInterval = setInterval(timer, 1000);
  btnIniciar.disabled = true;
});

//botão pause
btnPausar.addEventListener("click", () => {
  if (seconds === "00" && minutes === "00") {
    alert("Timer não iniciado!");
    return;
  }

  numTimer.className = "stop";
  btnIniciar.disabled = false;
  clearInterval(myInterval);
});

//botão zerar
btnZerar.addEventListener("click", () => {
  numTimer.className = "default";
  seconds = "00";
  minutes = "00";
  hour = "00";
  numTimer.innerText = `${hour}:${minutes}:${seconds}`;

  btnIniciar.disabled = false;
  clearInterval(myInterval);
});
