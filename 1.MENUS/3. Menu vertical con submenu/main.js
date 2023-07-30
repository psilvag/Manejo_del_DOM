
		
			var botones_array = document.getElementsByClassName("boton");
			for (var i = 0; i < botones_array.length; i++) {
				
                botones_array[i].addEventListener("click", function(){
					let submenu = this.nextElementSibling;
				    if (submenu.style.display==="block") {
						submenu.style.display = "none";
					} else {
						submenu.style.display = "block";
					}
				})
			}
		
	