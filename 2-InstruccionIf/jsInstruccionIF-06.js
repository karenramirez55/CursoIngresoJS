function mostrar()
{
	let edad=parseInt(document.getElementById("txtIdEdad").value)

	if (edad>18) 
	{
		alert("Ud es un adulto");

	}
	else if (edad>=13 && edad <=18) 
	{
		alert("Ud es adolescente");
	}
	else 
	{
		alert("Ud es un niño");
	}



}//FIN DE LA FUNCIÓN