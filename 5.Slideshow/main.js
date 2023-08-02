

		let index = 1;
        
		function mueve(n){
			muestraFoto(index += n);
		}
		function foto(n){
			muestraFoto(index = n);
		}

		function muestraFoto(n){
			
			var imagenes = document.getElementsByClassName("foto");
			var bolitas = document.getElementsByClassName("bolita");
			
			if( n > imagenes.length) index = 1;
			if( n < 1) index = imagenes.length;

			for (let i = 0; i < imagenes.length; i++) {
				imagenes[i].style.display = "none";
			}

			for (let i = 0; i < bolitas.length; i++) {
				bolitas[i].className = bolitas[i].className.replace("activo","bolita"); 
			}

			imagenes[index-1].style.display = "block";
			bolitas[index-1].className += " activo";
		}

