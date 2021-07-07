/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
AUTOR: Karen Denise Ramirez
EJERCICIO: 06*/
function sumar()
{
	let numero1;
	let numero2;
	let suma;
	let mensaje;
	
	numero1=document.getElementById("txtIdNumeroUno").value;
	numero1=parseInt(numero1);
	
	numero2=document.getElementById("txtIdNumeroDos").value; 
	numero2=parseInt(numero2);
	suma=numero1+numero2;
	mensaje="La suma es ";
	alert(mensaje+suma);

	//recordar que habia puesto parseInt sin la I in capital letter.

}

