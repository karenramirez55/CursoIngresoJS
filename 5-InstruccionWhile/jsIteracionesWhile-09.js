/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	
	var maximo;
	var minimo;
	var respuesta;
	var ingreseNumero;
	respuesta='s';
	minimo=0;
	maximo=0;

	while (respuesta=='s') 
	{
		ingreseNumero=prompt("Ingrese numero");
		ingreseNumero=parseInt(ingreseNumero);
		minimo=minimo+ingreseNumero;
		maximo=maximo+ingreseNumero;

		
		if (maximo<ingreseNumero) 
		{
			 maximo=ingreseNumero;
		}
		else
		{
			
			minimo=ingreseNumero;
			
		}

		respuesta=prompt("quiere seguir ingresando numeros? 's' o 'n'");
		document.getElementById("txtIdMinimo").value=minimo;
		document.getElementById("txtIdMaximo").value=maximo;
	
	}
	


}//FIN DE LA FUNCIÓN