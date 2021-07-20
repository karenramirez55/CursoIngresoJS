function mostrar()
{
	let estacionIngresada;
	let destino;
	let tarifa;
	let precioConPorcentaje;
	let precioFinal;
	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	tarifa=15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
				precioConPorcentaje=tarifa*20/100;
				precioFinal=tarifa+precioConPorcentaje;
				break;

				case "Cataratas":
				case "Cordoba":
				precioConPorcentaje=tarifa*10/100;
				precioFinal=tarifa-precioConPorcentaje;
				break;

				case "Mar del plata":
				precioConPorcentaje=tarifa*20/100;
				precioFinal=tarifa-precioConPorcentaje;
				break;

			}
			case "Verano":
				switch(destino)
				{
					case "Bariloche":
						precioConPorcentaje=tarifa*20/100;
						precioFinal=tarifa-precioConPorcentaje;
						break;

						case "Cataratas":
						case "Cordoba":
						precioConPorcentaje=tarifa*10/100;
						precioFinal=tarifa+precioConPorcentaje;
						break;
						case "Mar del plata":
						precioConPorcentaje=tarifa*20/100;
						precioFinal=tarifa+precioConPorcentaje;
						break;

				} 
				case "Otoño":
				case "Primavera":
					switch(destino)
					{
						case "Bariloche":
						case "Cataratas":
						case "Mar del plata":
						precioConPorcentaje=tarifa*10/100;
						precioFinal=tarifa+precioConPorcentaje;
						break;
						case "Cordoba":
						precioFinal=tarifa;
					}

	}
				
	
	

	alert("El precio final es $ "+precioFinal);
	

}