function mostrar()
{
    let numero1;
    let numero2;
    let resta;
    let suma;
    let mensaje;
    numero1=prompt("Ingrese un numero");
    numero2=prompt("Ingrese numero 2");
   
    
if (numero1==numero2)
    {
        mensaje=numero1+numero2;
    }
    else
    {
        if (numero1>numero2) 
        {   
            numero1=parseInt(numero1);
            numero2=parseInt(numero2);
            resta=numero1-numero2;
            mensaje=resta;
            
        }
        else
        { 
            if (numero1<numero2)
            {
                numero1=parseInt(numero1);
                numero2=parseInt(numero2);
                suma=numero1+numero2;
                mensaje=suma;
                
            }
            
        }
       
    }
    
    alert(mensaje);

    if (resta>10) 
    {
        alert("el resultado es "+ resta +" y supero el 10");
    }
    

}
