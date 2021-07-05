function mostrar()
{
	let edad=document.getElementById("txtIdEdad").value;
	let estadoCivil=document.getElementById("estadoCivil").value;

	if (edad<18 && estadoCivil != "Soltero") 
	{
		alert("Ud es muy chiquito para no ser soltero");
	}
	


}//FIN DE LA FUNCIÓN