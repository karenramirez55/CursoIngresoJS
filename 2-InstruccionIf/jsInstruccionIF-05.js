//AUTOR: Ramirez Karen Denise, EJERCICIO: IF 05

function mostrar()
{
	let edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad>17 || edad<13) 
	{
		alert("Ud no es adolescente");
	}
	

}//FIN DE LA FUNCIÓN