/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var tipoDeProducto;
  var cantidadDeBolsas;
  var precioIngresado;
  var precioAzucar;
  var precioYerba;
  var precioCafe;
  var preguntaDeControlComando;
  var precioFinal;
  var acumuladorTotalBolsas;
  var precioSinDescuento;
  var descuento;
  var acumuladorBolsasDeAzucar;
  var acumuladorBolsasDeYerba;
  var acumuladorBolsasDeCafe;
  var provisorioAzucar;
  var provisorioYerba;
  var provisorioCafe;
  var tipoMayorCantidad;
  var precioMasBarato;
  var tipoMasBarato;
  var flag;
  var precioTotalAzucar;
  var precioTotalCafe;
  var precioTotalYerba;

  flag=0;
  acumuladorTotalBolsas=0;
  acumuladorBolsasDeAzucar=0;
  acumuladorBolsasDeYerba=0;
  acumuladorBolsasDeCafe=0;
  precioAzucar=0;
  precioYerba=0;
  precioCafe=0;
  preguntaDeControlComando="si";

  while(preguntaDeControlComando=="si")
  {
        tipoDeProducto=prompt("ingrese yerba, cafe , azucar");
        while(tipoDeProducto!="yerba" && tipoDeProducto!="cafe" && tipoDeProducto!="azucar")
        {
          tipoDeProducto=prompt("reingrese yerba, cafe , azucar");
        }
        cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
        cantidadDeBolsas=parseInt(cantidadDeBolsas);
        while(cantidadDeBolsas<1)
        {
        cantidadDeBolsas=prompt("reingrese cantidad de bolsas");
        cantidadDeBolsas=parseInt(cantidadDeBolsas);
        }
        precioIngresado=prompt("ingrese precio por bolsa");
        precioIngresado=parseInt(precioIngresado);
        while(precioIngresado<1)
        {
        precioIngresado=prompt("reingrese precio por bolsa");
        precioIngresado=parseInt(precioIngresado);
        }

        switch(tipoDeProducto)
        {
          case "azucar":
              acumuladorBolsasDeAzucar=acumuladorBolsasDeAzucar+cantidadDeBolsas;
              provisorioAzucar=tipoDeProducto;
              precioAzucar=precioIngresado;
            break;
          case "cafe":
            acumuladorBolsasDeCafe=acumuladorBolsasDeCafe+cantidadDeBolsas;
            provisorioCafe=tipoDeProducto;
            precioCafe=precioIngresado;
            break;
          case "yerba":
              acumuladorBolsasDeYerba=acumuladorBolsasDeYerba+cantidadDeBolsas;
              provisorioYerba=tipoDeProducto;
              precioYerba=precioIngresado;
              break;
        }

        if(precioIngresado<precioMasBarato || flag==0)
        {
          precioMasBarato=precioIngresado;
          tipoMasBarato=tipoDeProducto;
          flag=1;
        }

        acumuladorTotalBolsas=acumuladorTotalBolsas+cantidadDeBolsas;
        preguntaDeControlComando=prompt("quiere seguir ingresando productos 'si o no' ");
   }
      precioTotalAzucar=acumuladorBolsasDeAzucar*precioAzucar;
      precioTotalYerba=acumuladorBolsasDeYerba*precioYerba;
      precioTotalCafe=acumuladorBolsasDeCafe*precioCafe;

        if (acumuladorTotalBolsas<6) 
        {
          precioFinal=precioTotalAzucar+precioTotalCafe+precioTotalYerba;
        }
        else
        {
          if (acumuladorTotalBolsas>5 && acumuladorTotalBolsas<11) 
          {
            precioSinDescuento=precioTotalAzucar+precioTotalCafe+precioTotalYerba;
            descuento=(precioSinDescuento*10)/100;
            precioFinal=precioSinDescuento-descuento;
          }
          else
          {
            precioSinDescuento=precioTotalAzucar+precioTotalCafe+precioTotalYerba;
            descuento=(precioSinDescuento*15)/100;
            precioFinal=precioSinDescuento-descuento;
          }
        }

        if (acumuladorBolsasDeAzucar>acumuladorBolsasDeCafe && acumuladorBolsasDeAzucar>acumuladorBolsasDeYerba) 
        {
          bolsasMayorCantidad= acumuladorBolsasDeAzucar;
          tipoMayorCantidad=provisorioAzucar;
        }
        else
        {
          if (acumuladorBolsasDeCafe>acumuladorBolsasDeYerba) 
          {
            bolsasMayorCantidad=acumuladorBolsasDeCafe;
            tipoMayorCantidad=provisorioCafe;
          }
          else
          {
            bolsasMayorCantidad=acumuladorBolsasDeYerba;
            tipoMayorCantidad=provisorioYerba;
          }
        }

      alert("a) Importe a pagar total en bruto es: " +precioSinDescuento);
      alert("b) Importe a pagar con descuento es: " +precioFinal);
      alert("c) EL tipo con mayor cantidad de bolsas es: " +tipoMayorCantidad);
      alert("d) Tipo de producto más barato sin descuento: " +tipoMasBarato);



}
