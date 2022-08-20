

const titulo = document.getElementById("titulo");
let color = localStorage.getItem("colorPagina");
console.log(color);
if (color == null) {
    color = "pink";
}


titulo.style.color = color;

localStorage.clear();
