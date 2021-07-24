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
	var acumuladorNegativos;
	var acumuladorPositivos;
	var contadorNegativos;
	var contadorPositivo;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	respuesta="s"
	acumuladorNegativos=0;
	acumuladorPositivos=0;
	contadorPositivo=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	diferenciaPositivosNegativos=0;
	

	while(respuesta=="s")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		if (numeroIngresado==0) 
		{
			contadorCeros=contadorCeros+1;
		}
		else
		{
			if (numeroIngresado>0) 
			{
				acumuladorPositivos=acumuladorPositivos+numeroIngresado;
				contadorPositivo=contadorPositivo+1;
			}
			if (numeroIngresado<0) 
			{
				acumuladorNegativos=acumuladorNegativos+numeroIngresado;
				contadorNegativos=contadorNegativos+1;
			}
			if (numeroIngresado%2==0) 
			{
				contadorPares=contadorPares+1;
			}
		}
		respuesta=prompt("Quiere ingresar otro numero 's' o 'n'?");
	}
	
	promedioPositivos=acumuladorPositivos/contadorPositivo;
	promedioNegativos=acumuladorNegativos/contadorNegativos;
	diferenciaPositivosNegativos=acumuladorPositivos+acumuladorNegativos;
	document.write("cantidad de ceros : "+contadorCeros+ " suma de positivos es : "+acumuladorPositivos+" Suma negativos: "+acumuladorNegativos+" Cantidad de positivos es :" +contadorPositivo+" Cantidad de negativos es : "+ contadorNegativos+ " Cantidad de pares es : "+contadorPares+ " Promedio de positivos es :"+promedioPositivos+ " Promedio de negativos es : "+ promedioNegativos+ "La diferencia entre positivos y negativos es:" +diferenciaPositivosNegativos);
	

		

	

	
}//FIN DE LA FUNCIÓN