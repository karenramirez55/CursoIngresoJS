/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var negativos=0;
	var positivos=0;
	var flag;
	var contadorNegativos;
	var contadorPositivo;
	var contadorCeros;
	var cantidadPositivos;
	cantidadPositivos=0;
	contadorPositivo=0;
	contadorNegativos=0;
	flag=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (flag==0) 
		{
			numeroIngresado=positivos;
			numeroIngresado=negativos;
			flag=1;
		}
		if (numeroIngresado<0) 
		{
			negativos=negativos+numeroIngresado;
			contadorNegativos=contadorNegativos++;
		}
		else
		{
			if (numeroIngresado>0) 
			{
				positivos=positivos+numeroIngresado;
				contadorPositivo=contadorPositivo++;
			}
		}
		
	respuesta=prompt("desea continuar ingrese 'si' o 'no'?");

	document.write("la suma positivos: "+positivos+ "cantidad positivos: "+ contadorPositivo);

	}//fin del while

	

	
}//FIN DE LA FUNCIÓN