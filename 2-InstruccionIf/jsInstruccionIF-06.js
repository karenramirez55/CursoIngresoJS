//AUTOR: Ramirez Karen Denise, EJERCICIO : IF 06

function mostrar()
{
	let edad;
	
	

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad>17) 
	{
		alert("Ud es mayor");

	}
	else
	{
		if (edad>12 && edad <18) 
		{
			alert("Ud es adolescente");
			
		}
		else
		{
			alert("Es un niño");
		}
	}
	


	
	



}//FIN DE LA FUNCIÓN