/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo=parseInt(document.getElementById("txtIdSueldo").value);
	let porcentaje=sueldo*0.1;
	let sueldoConAumento=sueldo+porcentaje
	
	document.getElementById("txtIdResultado").value=sueldoConAumento;



}
