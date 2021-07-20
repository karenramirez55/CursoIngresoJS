function mostrar()
{
    let continentes;
    let cantidadDeDias;
    let precioPorDia;
    let mediosDepago;
    let precioSinDescuento;
    let descuento;
    let precioFinalConDescuento;
    let suma;
    let precioFinalMasVeinte;
    let mensaje;

    continentes=document.getElementById("Marca").value;
    cantidadDeDias=prompt("Cuantos dias se hospedara?");
    cantidadDeDias=parseInt(cantidadDeDias);
    precioPorDia=100;
    mediosDepago=prompt("Ingrese 1)DEBITO 2)EFECTIVO 3)MERCADO PAGO 4)OTROS");
    mediosDepago=parseInt(mediosDepago);

    if (continentes=="América") 
    {
      if (mediosDepago==1) 
      {
          precioSinDescuento=cantidadDeDias*precioPorDia;
          descuento=(precioSinDescuento*60)/100;
          precioFinalConDescuento=precioSinDescuento-descuento;
          mensaje=precioFinalConDescuento
      }
      else
      {
            precioSinDescuento=cantidadDeDias*precioPorDia;
            descuento=(precioSinDescuento*50)/100;
            precioFinalConDescuento=precioSinDescuento-descuento;
            mensaje=precioFinalConDescuento
      }
      
    }
    else
    {
        if (continentes=="África") 
        {
            if (mediosDepago==2 || mediosDepago ==3) 
            {
                precioSinDescuento=cantidadDeDias*precioPorDia;
                descuento=(precioSinDescuento*75)/100;
                precioFinalConDescuento=precioSinDescuento-descuento;
                mensaje=precioFinalConDescuento
            }
            else
            {
                precioSinDescuento=cantidadDeDias*precioPorDia;
                descuento=(precioSinDescuento*60)/100;
                precioFinalConDescuento=precioSinDescuento-descuento;
                mensaje=precioFinalConDescuento
            }
        }
        
        else
        {
            if(continentes=="Europa") 
            {
                if (mediosDepago==1) 
                {
                    precioSinDescuento=cantidadDeDias*precioPorDia;
                    descuento=(precioSinDescuento*35)/100;
                    precioFinalConDescuento=precioSinDescuento-descuento;
                    mensaje=precioFinalConDescuento
                }
                
                else
                {
                    if (mediosDepago==3) 
                    {
                        precioSinDescuento=cantidadDeDias*precioPorDia;
                        descuento=(precioSinDescuento*30)/100;
                        precioFinalConDescuento=precioSinDescuento-descuento;
                        mensaje=precioFinalConDescuento
                    }
                    else
                    {
                        precioSinDescuento=cantidadDeDias*precioPorDia;
                        descuento=(precioSinDescuento*25)/100;
                        precioFinalConDescuento=precioSinDescuento-descuento;
                        mensaje=precioFinalConDescuento
                    }
                }
            }
        }
        if (continentes=="Asia" || continentes=="Oceania") 
        {
            precioSinDescuento=cantidadDeDias*precioPorDia;
            suma=(precioSinDescuento*20)/100;
            precioFinalMasVeinte=precioSinDescuento+suma;
            mensaje=precioFinalMasVeinte;
        }
    }
    alert("El precio final es : "+mensaje);
    
}
