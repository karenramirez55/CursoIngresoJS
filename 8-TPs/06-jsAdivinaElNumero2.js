/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
var contadorIntentos;
var numeroRandom;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroRandom=numeroRandom=Math.floor(Math.random()*50)+1;
	contadorIntentos=1;
	console.log(numeroRandom);

}

function verificar()
{
	let ingreseNumero;
  	ingreseNumero=document.getElementById("txtIdNumero").value;
  	ingreseNumero=parseInt(ingreseNumero);
	
	  if (ingreseNumero==numeroRandom) 
	  {
		switch(contadorIntentos)
		{
			
			case 1:
				mensaje="Ud es un psiquico";
				break;
			case 2:
					mensaje="Excelente percepcion";
					break;
			case 3: 
				mensaje="Esto es suerte";
				break;
			case 4:
				mensaje="Excelente tecnica";
				break;
			case 5:
				mensaje="Ud esta en la media";
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				mensaje="Falta tecnica";
				break;
			default:
				mensaje="Afortunado en el amor";
				
		}
		
	  }
	  else
	  {
		  mensaje="Numero incorrecto";
	  }
	  

	document.getElementById("txtIdIntentos").value=contadorIntentos;
	alert(mensaje);
	contadorIntentos=contadorIntentos+1;


	
	
	
	

}