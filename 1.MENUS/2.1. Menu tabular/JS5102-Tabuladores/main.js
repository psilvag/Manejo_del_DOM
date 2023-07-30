


function muestra(num){
        const contenido_array = document.getElementsByClassName("contenido");
		for (let i = 0; i < contenido_array.length; i++) {
			contenido_array[i].style.display = "none";
		}
		const imagen=document.getElementById("foto"+num)
		
		imagen.style.display="block";
		
	}