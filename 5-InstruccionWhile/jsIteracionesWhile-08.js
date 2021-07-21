
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var acumulador;
	var respuesta;
	var ingreseNumero;
	var negativo;
	var positivo;
	positivo=0;
	negativo=1;
	acumulador=0;
	respuesta='s';

while (respuesta=='s') 
{
	ingreseNumero=prompt("Ingrese un numero");
	ingreseNumero=parseInt(ingreseNumero);
	
	
	if (ingreseNumero<0) 
	{
		
		negativo=negativo*ingreseNumero;
		document.getElementById("txtIdProducto").value=negativo;
	}
	else
	{
		positivo=positivo+ingreseNumero;
		document.getElementById("txtIdSuma" ).value=positivo;
	}
	respuesta=prompt("Quiere escribir otro num? escriba 's' o 'n' ");
	
}





}//FIN DE LA FUNCIÓN