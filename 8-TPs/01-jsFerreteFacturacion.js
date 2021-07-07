/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

AUTOR: Karen Denise Ramirez
TP: FERRETE 1 FERRETE FACTURACION*/

function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let mensaje;

    
    precio1=document.getElementById("txtIdPrecioUno").value;
    precio1=parseInt(precio1);
    
    precio2=document.getElementById("txtIdPrecioDos").value;
    precio2=parseInt(precio2);
    
    precio3=document.getElementById("txtIdPrecioTres").value;
    precio3=parseInt(precio3);
    suma=precio1+precio2+precio3;

    mensaje="La suma de sus productos son $ ";
    alert(mensaje+suma);
    
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;
    let mensaje;
    precio1=document.getElementById("txtIdPrecioUno").value;
    precio1=parseInt(precio1);

    precio2=document.getElementById("txtIdPrecioDos").value;
    precio2=parseInt(precio2);

    precio3=document.getElementById("txtIdPrecioTres").value;
    precio3=parseInt(precio3);
    promedio=(precio1+precio2+precio3)/3;
    mensaje="El promedio de sus productos es : ";
    alert(mensaje+promedio);

}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let sumaMasIva;
    let precioFinal;
    let mensaje;
    precio1=document.getElementById("txtIdPrecioUno").value;
    precio1=parseInt(precio1);

    precio2=document.getElementById("txtIdPrecioDos").value;
    precio2=parseInt(precio2);

    precio3=document.getElementById("txtIdPrecioTres").value;
    precio3=parseInt(precio3);
    suma=precio1+precio2+precio3;
    sumaMasIva=suma*0.21;
    precioFinal=suma+sumaMasIva;
    mensaje="El precio final con 21% de IVA es $ ";
    alert(mensaje+precioFinal);

    
    
}