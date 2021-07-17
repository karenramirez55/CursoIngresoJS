/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    let precioLamparas;
    let marcas;
    let precioFinalConDescuento;
    let cantidadLamparas;
    let descuento;
    let ingresosBrutos;
    let sumaIngresosBrutos;

    marcas=document.getElementById("Marca").value;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    precioLamparas=cantidadLamparas*35;
    
    if (cantidadLamparas>5) 
        {
            descuento=precioLamparas*50/100;
            precioFinalConDescuento=precioLamparas-descuento;
        }
        else
        {
            if (cantidadLamparas==5) 
            {
                if(marcas=="ArgentinaLuz")
                {
                    descuento=precioLamparas*40/100;
                     precioFinalConDescuento=precioLamparas-descuento;
                }
                else
                {
                    descuento=precioLamparas*30/100;
                    precioFinalConDescuento=precioLamparas-descuento;
                }
            }
             else
             {
                    if (cantidadLamparas==4) 
                    {
                        if(marcas=="ArgentinaLuz" || marcas =="FelipeLamparas")
                        {
                            descuento=precioLamparas*25/100;
                             precioFinalConDescuento=precioLamparas-descuento;
                        }
                        else
                        {
                            descuento=precioLamparas*20/100;
                            precioFinalConDescuento=precioLamparas-descuento;
                        }
                    }
                    else
                      {
                          if (cantidadLamparas==3) 
                         {
                                if(marcas=="ArgentinaLuz")
                                {
                                    descuento=precioLamparas*15/100;
                                    precioFinalConDescuento=precioLamparas-descuento;
                                }
                                else
                                {
                                    if(marcas=="FelipeLamparas")
                                    {
                                        descuento=precioLamparas*10/100;
                                         precioFinalConDescuento=precioLamparas-descuento;
                                    }
                                    else
                                    {
                                        descuento=precioLamparas*5/100;
                                        precioFinalConDescuento=precioLamparas-descuento;
                                    }
                                }
                                
                            }
                           
                        } 
                }
            
           
        }

    document.getElementById("txtIdprecioDescuento").value=precioFinalConDescuento;
    if (precioFinalConDescuento>120) 
    {
        ingresosBrutos=precioFinalConDescuento*10/100;
        sumaIngresosBrutos=precioFinalConDescuento+ingresosBrutos;

    }
    alert("Ud pago de IIBB $ "+ingresosBrutos+ " siendo el importe final $ "+sumaIngresosBrutos);

    
    
    
    











  
        
        
    
}

 	
