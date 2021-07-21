/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{	
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado=parseInt(numeroIngresado);
	

	while(numeroIngresado>9 || numeroIngresado<0)
	{
		alert("Numero incorrecto");
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	}
	
	document.getElementById("txtIdNumero").value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN