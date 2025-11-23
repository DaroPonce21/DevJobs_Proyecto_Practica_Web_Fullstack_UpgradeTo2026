const jobs = document.querySelector(".jobs");

jobs.addEventListener("click", (e) => {
  const elemento = e.target;
  if (elemento.classList.contains("bottonAplicar")) {
    elemento.textContent = "¡Aplicado!";
    elemento.classList.add("aplicado");
    elemento.style.backgroundColor = "#4caf50"; //esto conviene hacerlo en css
    elemento.style.cursor = "not-allowed"; ////esto conviene hacerlo en css
    elemento.disabled = true;
  }
});

/*
console.log(botones);

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    boton.textContent = "¡Aplicado!";
    boton.classList.add("aplicado");
    boton.style.backgroundColor = "#4caf50"; //esto conviene hacerlo en css
    boton.style.cursor = "not-allowed"; ////esto conviene hacerlo en css
    boton.disabled = true;
  });
});
*/
