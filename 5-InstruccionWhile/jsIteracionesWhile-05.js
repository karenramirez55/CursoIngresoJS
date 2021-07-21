/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var mensaje;
	mensaje="El sexo ingresado es: ";
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!="m" && sexoIngresado !="f")
	{
		alert("El sexo ingresado es incorrecto.")
		sexoIngresado = prompt("ingrese f ó m .");

	}

	document.getElementById("txtIdSexo").value=mensaje+sexoIngresado;



	
}//FIN DE LA FUNCIÓN