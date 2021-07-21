/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var ingreseNumero;
	contador=0;
	acumulador=0;
	respuesta='s';
	


	while (respuesta=='s') 
	{
		ingreseNumero=prompt("Ingrese un numero");
		ingreseNumero=parseInt(ingreseNumero);
		acumulador=acumulador+ingreseNumero;
		respuesta=prompt("Quiere escribir otro numero? Escriba 's' para SI o 'n' para NO");
		
	}

	document.getElementById("txtIdPromedio").value=acumulador/5;
	document.getElementById("txtIdSuma").value=acumulador;

}//FIN DE LA FUNCIÓN