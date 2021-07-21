function mostrar()
{
	let estacionIngresada;
	let destino;
	let mensaje;
	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje="Se viaja";
					break;
					default:
					mensaje="No se viaja";
					}
			break;
			case "Verano":
				switch(destino)
				{
					case "Cataratas":
					case "Mar del plata":
					mensaje="Se viaja";
					break;
					default:
					mensaje="No se viaja";
				}
				break;
				case "Otoño":
					switch(destino)
					{
						default:
							mensaje="Se viaja";
					}
					break;
				case "Primavera":
					switch(destino)
					{
						case "Bariloche":
							mensaje="No se viaja";
							break;
							default:
								mensaje="Se viaja";
					}
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN