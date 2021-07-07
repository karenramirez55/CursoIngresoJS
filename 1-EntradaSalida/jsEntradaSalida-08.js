/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
AUTOR: Karen Denise Ramirez
EJERCICIO: 8*/
function SacarResto()
{
	let numero1=document.getElementById("txtIdNumeroDividendo").value;
	numero1=parseInt(numero1);
	let numero2=document.getElementById("txtIdNumeroDivisor").value;
	numero2=parseInt(numero2);
	let resto;
	resto=numero1%numero2;
	let mensaje;
	mensaje="El resto es "
	alert(mensaje+resto);
}
