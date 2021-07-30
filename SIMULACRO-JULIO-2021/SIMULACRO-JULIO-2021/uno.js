/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
  
     var tipoDeProducto;
     var precio;
     var cantidadDeUnidades;
     var marca;
     var capacidad;
     var iteracion;
     var flag;
     var marcaSsdMasBarato;
     var unidadesSsdMasBarato;
     var acumuladorSsdMasBarato;
     var acumuladorHddMayorPrecio;
     var segundoFlag;
     var almacenamientoHddMayorPrecio;
     var unidadesHddMayorPrecio;
     var acumuladorUnidadesHddTotal;

     acumuladorUnidadesHddTotal=0;
     acumuladorSsdMasBarato=0;
     acumuladorHddMayorPrecio=0;
     segundoFlag=0;
     flag=0;
     iteracion=0;


     while(iteracion<5)
     {
            tipoDeProducto=prompt("ingrese hdd, ssd, ssdm2");
            while(tipoDeProducto!="hdd" && tipoDeProducto!="ssd" && tipoDeProducto!="ssdm2")
            {
               tipoDeProducto=prompt("reingrese hdd, ssd, ssdm2");
            }
            precio=prompt("ingrese precio entre $5000 y $18000");
            precio=parseInt(precio);
            while(precio<5000 && precio>18000)
            {
            precio=prompt("reingrese precio entre $5000 y $18000");
            precio=parseInt(precio);
            }
            cantidadDeUnidades=prompt("ingrese cantidad de unidades no pude superar las 50 no ser 0");
            cantidadDeUnidades=parseInt(cantidadDeUnidades);
            while(cantidadDeUnidades<1 && cantidadDeUnidades>50)
            {
            cantidadDeUnidades=prompt("reingrese cantidad de unidades no pude superar las 50 no ser 0");
            cantidadDeUnidades=parseInt(cantidadDeUnidades);
            }
            marca=prompt("ingrese marca, kingston, seagate, western digital");
            while(marca!="kingston" && marca!="seagate" && marca!="western digital")
            {
               marca=prompt("reingrese marca, kingston, seagate, western digital");
            }
            capacidad=prompt("ingrese capacidad  250gb, 500gb,1tb, 2tb");
            while(capacidad!="250gb" && capacidad!="500gb" && capacidad!="1tb" && capacidad!="2tb")
            {
               capacidad=prompt("ingrese capacidad  250gb, 500gb,1tb, 2tb");
            }
            if (tipoDeProducto=="ssd") 
            {
               if (flag==0 || precio<acumuladorSsdMasBarato ) 
               {
                  acumuladorSsdMasBarato=precio;
                  marcaSsdMasBarato=marca;
                  unidadesSsdMasBarato=cantidadDeUnidades;
                  flag=1;
               }
            }
            if (tipoDeProducto=="hdd") 
            {
               if (segundoFlag==0 || precio>acumuladorHddMayorPrecio) 
               {
                  acumuladorHddMayorPrecio=precio;
                  almacenamientoHddMayorPrecio=capacidad;
                  unidadesHddMayorPrecio=cantidadDeUnidades;
                  segundoFlag=1;
               }
            }
            if (tipoDeProducto=="hdd") 
            {
               acumuladorUnidadesHddTotal=acumuladorUnidadesHddTotal+cantidadDeUnidades;
            }
      
            iteracion++;
     }
     alert("SDD MAS BARATO: la cantidad de unidades es: "+unidadesSsdMasBarato+ " y la marca es "+marcaSsdMasBarato+ "EL HDD DE MAYOR PRECIO VALE $ "+acumuladorHddMayorPrecio+" su capacidad de almacenamiento es: "+almacenamientoHddMayorPrecio+ " y las unidades son: "+unidadesHddMayorPrecio+ " la cantidad de unidades total de HDD es "+acumuladorUnidadesHddTotal);


}
