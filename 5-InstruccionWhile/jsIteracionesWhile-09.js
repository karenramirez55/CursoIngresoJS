/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	
	var maximo;
	var minimo;
	var respuesta;
	var ingreseNumero;
	var flag;
	flag=0;
	respuesta='s';
	
	while (respuesta=='s') 
	{
		ingreseNumero=prompt("Ingrese numero");
		ingreseNumero=parseInt(ingreseNumero);
		
		if (flag==0) 
		{

			maximo=ingreseNumero;
			minimo=ingreseNumero;
			flag=1;
				
		}
		if (ingreseNumero>maximo) 
		{

				maximo=ingreseNumero;
		}
		else
		{
			if (ingreseNumero<minimo) 
			{
				minimo=ingreseNumero;
			}
		}
		

		respuesta=prompt("quiere seguir ingresando numeros? 's' o 'n'");
		document.getElementById("txtIdMinimo").value=minimo;
		document.getElementById("txtIdMaximo").value=maximo;
	
	}
	


}//FIN DE LA FUNCIÓN