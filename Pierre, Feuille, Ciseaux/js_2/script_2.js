/*--------------------------------------------*\
                Variables
\*--------------------------------------------*/

//Creamos la var y recuperamos los elementos HTML con << getElementById >>.
$boton = document.getElementById("boton");
$resultado = document.getElementById("resultado");
$empate = document.getElementById("empate");
$ganar = document.getElementById("ganar");
$perder = document.getElementById("perder");
$error = document.getElementById("error");
$selectOb = document.getElementById("menu");

/*-----------------------------------------------------------------------------*\
  Math.ceil() -> Redondea un numero decimal siempre hacia arriba. 
  -> Devuelve un numero entero que sera igual o superior al numero introducido.                     
\*------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*\
 Math.random() -> Retorna un numero aleatorio entre el 0(incluido) y el 1(excluido).
  -> En este caso le indicamos que la escala estará comprendida del 0(incluido) al 3(excluido).
\*----------------------------------------------------------------------------------------------*/

$objetosPc = Math.ceil(Math.random() * 2);

empate = 0;
ganar = 0;
perder = 0;

/*--------------------------------------------------------------*\
                        Funciones
\*--------------------------------------------------------------*/

// Seleccionar un objeto del menú desplegable.
function seleccionitem() {
	$elige = $selectOb.selectedIndex;
	$valor = $selectOb.options[$elige].value;
	$objetosPc = Math.ceil(Math.random() * 2);
}

// Mensajes de los resultados :

//Mensaje de resultado empate.
function resempate() {
	$empate.innerHTML = empate + " Égalité";
}
//Mensaje de resultado ganar.
function resganar() {
	$ganar.innerHTML = ganar + " Gagnant";
}

//Mensaje de resultado perder.
function resperder() {
	$perder.innerHTML = perder + " Perdant";
}

/*--------------------------------------------------------------*\
                 Comprobar las condiciones de 
                 empate, victoria y perdida.
                 Incrementación del contador.
\*--------------------------------------------------------------*/
// Si el valor que elegimos es igual que el valor del ordenador el resultado sera empate.
function comprobar() {

	if($valor == $objetosPc) {
		//Incrementación del empate.
		empate++;
		$resultado.innerHTML = "Vous êtes égalité avec l'ordinateur";
		resempate();

	}else if((($valor == 0) && ($objetosPc == 2)) || (($valor == 1) && ($objetosPc == 0)) || (($valor == 2) && ($objetosPc == 1))) {
		ganar++;
		$resultado.innerHTML = "Vous avez battu l'ordinateur";
		resganar();

	}else if((($valor == 0) && ($objetosPc == 1)) || (($valor == 1) && ($objetosPc == 2)) || (($valor == 2) && ($objetosPc == 0))) {
		perder++;
		$resultado.innerHTML = "L'ordinateur vous a battu";
		resperder();

	}else {
		$error.innerHTML = "Choisissez une des 3 options : Pierre, Feuille ou Ciseaux!!!";
		tiempo();
	}

}

/*--------------------------------------------------------------*\
         Función encragrada de quitar <<< $selectOb >>

\*--------------------------------------------------------------*/

function tiempo() {
	setTimeout(function(){
		$error.innerHTML = '';
	},4000);
	$selectOb.selectedIndex = 0;
	$valor = 3;
}

$boton.onclick = comprobar;
resempate();
resganar();
resperder();
