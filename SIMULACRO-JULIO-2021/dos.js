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
  var precioPorBolsa;
  var preguntaControlComando;
  var precioSinDescuento;
  var descuento;
  var acumuladorBolsasAzucar;
  var precioFinal;
  var acumuladorBolsasDeCafe;
  var acumuladorBolsasYerba;
  var acumuladorMayorBolsas;
  var tipoConMayorCantidadDeBolsas;
  var acumuladorDeBolsas;
  var auxTipoAzucar;
  var auxTipoCafe
  var auxTipoYerba;
  acumuladorDeBolsas=0;
  acumuladorBolsasDeCafe=0;
  acumuladorBolsasYerba=0;
  acumuladorBolsasAzucar=0; 
  preguntaControlComando="si";

      while(preguntaControlComando=="si")
      {
            tipoDeProducto=prompt("ingrese yerba,azucar, cafe");
            while(tipoDeProducto!="yerba" && tipoDeProducto!="azucar" && tipoDeProducto!="cafe")
            {
              tipoDeProducto=prompt("reingrese yerba,azucar, cafe");
            }
            cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
            cantidadDeBolsas=parseInt(cantidadDeBolsas);
            while(cantidadDeBolsas<1)
            {
              cantidadDeBolsas=prompt("reingrese cantidad de bolsas");
              cantidadDeBolsas=parseInt(cantidadDeBolsas);
            }
            precioPorBolsa=prompt("ingrese precio por bolsa");
            precioPorBolsa=parseInt(precioPorBolsa);
            while(precioPorBolsa<1)
            {
              precioPorBolsa=prompt("reingrese precio por bolsa");
              precioPorBolsa=parseInt(precioPorBolsa);
            }
           
            switch(tipoDeProducto)
            {
              case "azucar":
                  acumuladorBolsasAzucar=acumuladorBolsasAzucar+cantidadDeBolsas;
                  auxTipoAzucar=tipoDeProducto;
                  break;
              case "cafe":
                  acumuladorBolsasDeCafe=acumuladorBolsasDeCafe+cantidadDeBolsas;
                  auxTipoCafe=tipoDeProducto;
                  break;
              case "yerba":
                  acumuladorBolsasYerba=acumuladorBolsasYerba+cantidadDeBolsas;
                  auxTipoYerba=tipoDeProducto;
                  break;
            }
            acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
            preguntaControlComando=prompt("desea seguir ingresando productos 'si o no' ?");
      }

      if (acumuladorDeBolsas>5 && acumuladorDeBolsas<11)
      {
        precioSinDescuento=precioPorBolsa*acumuladorDeBolsas;
        descuento=(precioSinDescuento*10)/100;
        precioFinal=precioSinDescuento-descuento;     
      }
      else
      {
        if (acumuladorDeBolsas>10) 
        {
          precioSinDescuento=precioPorBolsa*acumuladorDeBolsas;
          descuento=(precioSinDescuento*15)/100;
          precioFinal=precioSinDescuento-descuento;
        }
        else
        {
          precioSinDescuento=precioPorBolsa*acumuladorDeBolsas;
          precioFinal=precioPorBolsa*acumuladorDeBolsas;              
        }
      }

      if (acumuladorBolsasAzucar>acumuladorBolsasDeCafe && acumuladorBolsasAzucar>acumuladorBolsasYerba) 
      {
        tipoConMayorCantidadDeBolsas=auxTipoAzucar;
        acumuladorMayorBolsas=acumuladorBolsasAzucar;
        
      }
      else
      {
        if (acumuladorBolsasDeCafe>acumuladorBolsasYerba) 
        {
          tipoConMayorCantidadDeBolsas=auxTipoCafe;
          acumuladorMayorBolsas=acumuladorBolsasDeCafe;
          
        }
        else
        {
          tipoConMayorCantidadDeBolsas=auxTipoYerba;
          acumuladorMayorBolsas=acumuladorBolsasYerba;
         
        }
      }
      alert("El precio final a pagar es$ "+ precioFinal+ "el producto con mas cantidad de bolsas es "+ tipoConMayorCantidadDeBolsas+ " y tiene : "+acumuladorMayorBolsas+ " cantidad de bolsas");




}
