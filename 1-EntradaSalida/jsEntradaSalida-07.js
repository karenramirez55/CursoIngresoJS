/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value); //RECORDAR QUE EL CIERRE DE ) VA DESP DEL VALUE
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	let suma=numero1+numero2;
	alert(`La suma es ${suma}`);
}

function restar()
{
	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	let resta=numero1-numero2;
	alert(`La resta es ${resta}`);

}

function multiplicar()
{ 
	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	let multiplo=numero1*numero2;
	alert(`La multiplicacion es ${multiplo}`);
}

function dividir()
{
	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	let division=numero1/numero2;
	alert(`La division es ${division}`);
}

