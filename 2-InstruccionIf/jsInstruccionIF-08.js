//AUTOR: Ramirez Karen Denise, EJERCICIO: IF 08.

function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	let estadoCivil;
	estadoCivil=document.getElementById("estadoCivil").value;
	
	if (edad>17 && estadoCivil=="Soltero") 
	{
		alert("Es soltero y no es menor");
	}

	


}//FIN DE LA FUNCIÓN