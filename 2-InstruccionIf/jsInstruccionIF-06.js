function mostrar()
{
	let edad;
	let mensaje;
	

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	


	if (edad>17) 
	{
		alert("Ud es un adulto");
		if (edad>12 && edad <18) 
		{
		mensaje="Ud es adolescente";
		}

	}
	else if (edad>12 && edad <18) 
	{
		alert("Ud es adolescente");
	}
	else 
	{
		alert("Ud es un niño");
	}



}//FIN DE LA FUNCIÓN