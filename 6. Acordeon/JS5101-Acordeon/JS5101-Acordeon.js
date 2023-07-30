

var acordeon_array = new Array();

window.onload = function(){
	acordeon_array = document.getElementsByClassName("acordeon");
	//recorremos el arreglo
	for (var i = 0; i < acordeon_array.length; i++) {
		acordeon_array[i].addEventListener("click",selecciona);
	}
}

function selecciona(){
	this.classList.toggle("activo");
	var panel = this.nextElementSibling;  // el next sibling de acordeon, que seria el div panel
  
	if (panel.style.display==="block") {
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
	}
}