function mostrar()
{
    let numero1;
    let numero2;
    let mensaje;
    let resta;
   

    numero1=prompt("Ingrese un numero");
    numero1=parseInt(numero1);
    numero2=prompt("Ingrese un numero");
    numero2=parseInt(numero2);

    if (numero1==numero2) 
    {
        mensaje=""+numero1+numero2;
    }
    else
    {
        if (numero1>numero2) 
        {
            resta=numero1-numero2;
            mensaje=resta;
        }
        if (numero1<numero2) 
        {
            mensaje=numero1+numero2;
        }
    }

    

    if (resta>10) 
    {
        mensaje="La resta es "+ mensaje+ " y supero el 10";
    }

    
    alert(mensaje);

}