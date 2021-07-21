
function mostrar()
{
	var contador;
	var ingreseNumero;
	var acumulador;
	var sumaAcumulada;
	var promedio;
	contador=0;
	acumulador=0;

	while (contador<5) 
	{
		
		ingreseNumero=prompt("Ingrese un numero");
		ingreseNumero=parseInt(ingreseNumero);
		acumulador=acumulador+ingreseNumero;
		sumaAcumulada=acumulador;
		promedio=acumulador/5;
		contador++;
		
	}
	document.getElementById("txtIdPromedio").value=promedio;
	document.getElementById("txtIdSuma").value=sumaAcumulada;
	
}//FIN DE LA FUNCIÓN