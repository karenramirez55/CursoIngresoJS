/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldo;
	var legajo;
	var nacionalidad;
	var legajo;

	edadIngresada=prompt("Ingrese su edad");
	edadIngresada=parseInt(edadIngresada);
	sexoIngresado=prompt("ingrese su sexo 'm' o 'f' ");
	estadoCivilIngresado=prompt("ingrese su estado civil 1)soltero 2)casado 3)divorciado 4)viudo");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	sueldo=prompt("ingrese su sueldo, no puede ser menor a $8000");
	sueldo=parseInt(sueldo);
	legajo=prompt("ingrese su legajo de 4 cifras sin 0 a la izquierda ");
	legajo=parseInt(legajo);
	nacionalidad=prompt("ingrese nacionalidad A)Argentinos E)Extranjeros N)Nacionalizados");

			while (edadIngresada>90 || edadIngresada<18) 
		{
			edadIngresada=prompt("Ingrese su edad");
		}
		
		while (sexoIngresado!="m" && sexoIngresado != "f")
			{
				sexoIngresado=prompt("ingrese su sexo 'm' o 'f' ");
			}
		
		while (estadoCivilIngresado!=1 && estadoCivilIngresado !=2 && estadoCivilIngresado!=3 && estadoCivilIngresado!=4) 
		{
			
			estadoCivilIngresado=prompt("ingrese su estado civil 1)soltero 2)casado 3)divorciado 4)viudo");
		}
		
		while (sueldo<8000) 
		{
			sueldo=prompt("ingrese su sueldo, no puede ser menor a $8000");
		}
		
		while (nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N" ) 
		{
			nacionalidad=prompt("ingrese nacionalidad A)Argentinos E)Extranjeros N)Nacionalizados");
			
		}
		while(legajo<1000 || legajo >9999)
		{
			legajo=prompt("ingrese su legajo de 4 cifras sin 0 a la izquierda ");
		}

		document.getElementById("txtIdEdad").value="La edad ingresada es "+edadIngresada;
		document.getElementById("txtIdSexo").value="El sexo es "+sexoIngresado;
		document.getElementById("txtIdEstadoCivil").value="Su estado civil es "+estadoCivilIngresado;
		document.getElementById("txtIdSueldo").value="Su sueldo es $ "+sueldo;
		document.getElementById("txtIdLegajo").value="Su legajo es "+legajo;
		document.getElementById("txtIdNacionalidad").value="Su nacionalidad es "+nacionalidad;


}
