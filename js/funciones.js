//Esta función es para la galería	

const enlaces = document.querySelectorAll(".laminas a");
const modal = document.querySelector(".modal");

//Abrir modal - hace click en cualquiera de los enlaces y le pone la cara visible a la modal

enlaces.forEach(function(enlace){
	enlace.addEventListener("click", function(evento){
		evento.preventDefault();
		modal.classList.add("visible");
	});
});

//Cerrar modal - hace click en cualquier parte y le quita la cara visible a la modal	

modal.addEventListener("click", function(){
	modal.classList.remove("visible");
});

//Esta función es para la sección de novedades

var diaMadre = document.querySelector(".novedades span");

var color =[];

for (var contador = 0 ; contador < 3; contador++){
  color.push(Math.floor(Math.random()* 256));
}

diaMadre.style.color = `rgb(${color.join(",")})`;