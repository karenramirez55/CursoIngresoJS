function mostrar()
{
    var altura;
    var sexo;
    var contador;
    var acumulador;
    acumulador=0;
    contador=0;

    while(contador<5)
    {
        altura=prompt("Ingrese su altura en Cm");
        sexo=prompt("Ingrese su sexo");
        contador++;
        if (altura<0 && altura>250) 
        {   
            alert("dato incorrecto");
            sexo=prompt("Ingrese su sexo");
        }
    }
   
    
    
}
