function mostrar()
{
	let edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad>13 && edad<=17) 
	{
		alert("Ud es adolescente");
	}
	else
	{
		alert("Ud no es adolescente");
	}
	

}//FIN DE LA FUNCIÓN