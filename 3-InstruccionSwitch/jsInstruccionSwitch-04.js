function mostrar()
{

	let mesDelAño
	mesDelAño=document.getElementById("txtIdMes").value;
	


	switch(mesDelAño)
	{
		case "Enero":
		case "Agosto":
		case "Marzo":
		case "Octubre":
		case "Mayo":
		case "Julio":
		case "Diciembre":
		

		{
			alert("Este mes tiene 31 dias");
			break;
		}
		case "Abril":
		case "Septiembre":
		case "Junio":
		case "Noviembre":

		{
			alert("Este mes tiene 30 dias");
			break;
		}
		case "Febrero":
		{
			alert("Este mes tiene 28 dias");
			break;
		}
		
	
	}


}