//AUTOR: Ramirez Karen Denise, EJERCICIO: IF 03

function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad>17) 
	{
		alert("Ud es mayor de edad");
	}
	else
	{
		alert("Ud es menor");
	}

}//FIN DE LA FUNCIÓN