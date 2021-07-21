/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let ingreseClave;
	ingreseClave=prompt("Ingrese su clave");
	
	
	

	while(ingreseClave!="utn750")
	{
		alert("clave incorrecta");
		ingreseClave=prompt("Ingrese su clave")
		

	}
	
}
