/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
AUTOR: Karen Denise Ramirez
EJERCICIO: 07*/ 
function sumar()
{	
	let numero1;
	numero1=document.getElementById("txtIdNumeroUno").value; 
	numero1=parseInt(numero1);												//RECORDAR QUE EL CIERRE DE ) VA DESP DEL VALUE
	let numero2;
	numero2=document.getElementById("txtIdNumeroDos").value;
	numero2=parseInt(numero2);
	
	let suma;
	suma=numero1+numero2;
	alert("La suma es "+suma);
}

function restar()
{
	let numero1;
	numero1=document.getElementById("txtIdNumeroUno").value;
	numero1=parseInt(numero1);
	let numero2;
	numero2=document.getElementById("txtIdNumeroDos").value;
	numero2=parseInt(numero2);
	let resta;
	resta=numero1-numero2;
	alert("La resta es "+ resta);

}

function multiplicar()
{ 
	let numero1;
	numero1=document.getElementById("txtIdNumeroUno").value;
	numero1=parseInt(numero1);
	let numero2;
	numero2=document.getElementById("txtIdNumeroDos").value;
	numero2=parseInt(numero2);
	let multiplo;
	multiplo=numero1*numero2;
	alert("La multiplicacion es " +multiplo);
}

function dividir()
{
	let numero1;
	numero1=document.getElementById("txtIdNumeroUno").value;
	numero1=parseInt(numero1);
	let numero2;
	numero2=document.getElementById("txtIdNumeroDos").value;
	let division;
	division=numero1/numero2;
	alert("La division es "+division);
}

