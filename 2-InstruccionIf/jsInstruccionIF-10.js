//AUTOR: Ramirez Karen Denise, EJERCICIO IF 10.
function mostrar()
{
	let random;
	random=Math.floor(Math.random()*10)+1;
	let mensaje;
	

	if (random>8) 
	{
		mensaje=random+" :EXCELENTE";
		
		
	}
	else
	{
		if (random>3) 
		{
			mensaje=random+" :APROBO";
			
		}
		else
		{
			mensaje=random+" Vamos la proxima se puede";
		}
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN