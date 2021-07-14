//AUTOR: Ramirez Karen Denise, EJERCICIO: IF 07
function mostrar()
{
	let edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	let estadoCivil=document.getElementById("estadoCivil").value;

	if (edad<18 && estadoCivil != "Soltero") 
	{
		alert("Ud es muy pequeño para no ser soltero");
	}
	


}//FIN DE LA FUNCIÓN