/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
AUTOR: Karen Denise Ramirez
EJERCICIO: 09 BIS*/
function mostrarAumento()
{

	let sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);
	let IngresePorcentaje;
	IngresePorcentaje=prompt("Ingrese porcentaje");
	IngresePorcentaje=parseInt(IngresePorcentaje);
	let porcentaje;
	porcentaje=sueldo*IngresePorcentaje/100;
	let sueldoConAumento;
	sueldoConAumento=sueldo+porcentaje;
	
	document.getElementById("txtIdResultado").value=sueldoConAumento;



}
