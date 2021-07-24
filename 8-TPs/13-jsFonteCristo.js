/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

var numeroIngresado;
var contadorNumerosPares;
contadorNumerosPares=0;



function ComenzarIngreso () 
{
 	/*numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);
    while(numeroIngresado<0)
    {

        alert("Ingrese solo numeros positivos");
    }*/
    
}
function NumerosPares () 
{
    var provisorioPar;

    numeroIngresado=document.getElementById("txtIdNumero").value;
    numeroIngresado=parseInt(numeroIngresado);
    provisorioPar=numeroIngresado;

    if(numeroIngresado<0)
    {

        alert("Ingrese solo un numero positivo");
    }
 	while (provisorioPar>0) 
     {
        if (provisorioPar %2 == 0) 
        {
            contadorNumerosPares++;
        }
         provisorioPar--;

     }
     alert(contadorNumerosPares);
}
function NumeroImpares () 
{
 	
}
function NumerosDivisibles () 
{
 	
}
function VerificarPrimo () 
{
 	
}
function NumerosPrimos () 
{
 	
}

