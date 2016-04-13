
/*--------------------------------------------------------------*\
                        Variables
\*--------------------------------------------------------------*/

// Recuperamos los elementos del HTML con el método << getElementById >>.
$numero = document.getElementById('numero');
$boton = document.getElementById('boton');
$resultado = document.getElementById('resultado');

/*-----------------------------------------------------------------------------*\
  Math.ceil() -> Redondea un numero decimal siempre hacia arriba. 
  -> Devuelve un numero entero que sera igual o superior al numero introducido.                     
\*------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*\
 Math.random() -> Retorna un numero aleatorio entre el 0(incluido) y el 1(excluido).
  -> En este caso le indicamos que la escala estará comprendida del 0(incluido) al 101(excluido).
\*----------------------------------------------------------------------------------------------*/

respuesta = Math.ceil(Math.random() * 101);



/*--------------------------------------------------------------*\
                        Función
\*--------------------------------------------------------------*/

// Creamos la función que se encargara de verificar los resultados.
function verificar() {
	// Esta if aparecerá solo si el numero introducido es inferior al numero seleccionado por el pc.
	if ($numero.value < respuesta) {
		$resultado.innerHTML = "Votre numéro doit être supérieur au numéro introduit";
	// Esta if aparecerá solo si el numero introducido es superior al numero seleccionado por el pc.
	}if ($numero.value > respuesta) {
		$resultado.innerHTML = "Votre numéro doit être inférieur au numéro introduit";
	// Esta if aparecerá solo si el numero introducido el correcto.
	}if ($numero.value == respuesta) {
		$resultado.innerHTML = "Bravo! Vous avez trouvé le bon numéro!";
	}	
}
// Utilizamos el evento onclick sobre el boton y lo = a la verificacion.	
$boton.onclick = verificar;







