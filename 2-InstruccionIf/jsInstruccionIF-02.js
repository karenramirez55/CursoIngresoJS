//AUTOR: Ramirez Karen Denise, EJERCICIO: IF 02

function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad>17) 
	{
		alert("Ud es mayor de edad");
	}

}//FIN DE LA FUNCIÓN