/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   
    
	let temperatura;
    let  FahrenheitACentigrados;
    let mensaje;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);
     FahrenheitACentigrados=(temperatura-32)*5/9;
    mensaje=(temperatura+" ° FAHRENHEIT equivale a " + FahrenheitACentigrados+ " ° CENTIGRADOS");
    alert(mensaje);
    
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let centigradosAFahrenheit;
    let mensaje;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);
    centigradosAFahrenheit=(9/5*temperatura)+32;
    mensaje=(temperatura+" ° CENTIGRADOS equivale a " +centigradosAFahrenheit+ " °FAHRENHEIT");
    alert(mensaje);
}
