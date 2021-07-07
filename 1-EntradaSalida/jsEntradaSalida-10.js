/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
AUTOR: Karen Denise Ramirez
EJERCICIO: 10 BIS */
function mostrarAumento()
{
	let importe;
	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);
	let IngresePorcentaje;
	IngresePorcentaje=prompt("Ingrese porcentaje");
	IngresePorcentaje=parseInt(IngresePorcentaje);
	let porcentaje;
	porcentaje=importe*IngresePorcentaje/100;
	let descuento;
	descuento=importe-porcentaje;
	document.getElementById("txtIdResultado").value=descuento;

	


}
//PONER PARSEFLOAT PARA SUELDOS ETC