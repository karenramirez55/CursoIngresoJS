/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let perimetro;
    let mensaje;
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);
    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);
    perimetro=ancho+ancho+largo+largo;
    mensaje="La cantidad de alambre a comprar para 3 vueltas es : "
    alert(mensaje+perimetro*3);



}
function Circulo () 
{
	let radio;
    let pi;
    let perimetroRadio;
    let mensaje;
    
    pi=3.14;
    radio=document.getElementById("txtIdRadio").value;
    radio=parseInt(radio);
    perimetroRadio=2*pi*radio;
    mensaje="La cantidad de alambre a comprar para 3 vueltas es : "
    alert(mensaje+perimetroRadio*3);


}
function Materiales () 
{
	let ancho;
    let largo;
    let area;
    let cemento;
    let cal;
    let mensaje;

    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);
    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);
    area=largo*ancho;
    cemento=area*2;
    cal=area*3;
    mensaje="Para el contrapiso cantidad de bolsas cemento: "+cemento+ " y esta cantidad de bolsas de cal: "+ cal;
    
    alert(mensaje);

}