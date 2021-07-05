function mostrar()
{
	let edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad>18) 
	{
		alert("Ud es mayor de edad");
	}
	else
	{
		alert("Ud es menor");
	}

}//FIN DE LA FUNCIÓN