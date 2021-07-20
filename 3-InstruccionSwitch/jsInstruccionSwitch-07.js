function mostrar()
{
	let destinoIngresado;
	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		alert("Punto cardinal : SUR");
		break;

		case "Cataratas":
		alert("Punto cardinal : Norte");
		break;

		case "Mar del plata":
		alert("Punto cardinal : Este");
		break;
		
		

		
	}

}