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

    let precioLampara;
    let cantidadDeLamparas;
    let marcas;
    let precioFinalDescuento;
    let descuento;
    

    cantidadDeLamparas=document.getElementById("txtIdCantidad").value;
    precioLampara=cantidadDeLamparas*35;
    marcas=document.getElementById("Marca").value;
    

    if (cantidadDeLamparas==5 && marcas=="ArgentinaLuz") 
    {
        descuento=precioLampara*40/100;
        precioFinalDescuento=precioLampara-descuento;
        document.getElementById("txtIdprecioDescuento").value=precioFinalDescuento;
        
    }
    else
    {
        if (cantidadDeLamparas==5 && marcas !="ArgentinaLuz") 
        {
            descuento=precioLampara*30/100;
            precioFinalDescuento=precioLampara-descuento;
            document.getElementById("txtIdprecioDescuento").value=precioFinalDescuento;
        }
        else
        {
            if (cantidadDeLamparas==4 && marcas=="FelipeLamparas" || marcas=="ArgentinaLuz") 
            {
                descuento=precioLampara*25/100;
                precioFinalDescuento=precioLampara-descuento;
                document.getElementById("txtIdprecioDescuento").value=precioFinalDescuento;
            }
            else
            {
                if (cantidadDeLamparas==4 && marcas != "FelipeLamparas" && marcas !="ArgentinaLuz") 
                {
                    descuento=precioLampara*20/100;
                    precioFinalDescuento=precioLampara-descuento;
                    document.getElementById("txtIdprecioDescuento").value=precioFinalDescuento;
                }
                else
                {
                    if (cantidadDeLamparas==3 && marcas =="ArgentinaLuz") 
                    {
                        descuento=precioLampara*15/100;
                        precioFinalDescuento=precioLampara-descuento;
                        document.getElementById("txtIdprecioDescuento").value=precioFinalDescuento;
                    }
                    else
                    {
                        if (cantidadDeLamparas==3 && marcas=="FelipeLamparas") 
                        {
                            descuento=precioLampara*10/100;
                            precioFinalDescuento=precioLampara-descuento;
                            document.getElementById("txtIdprecioDescuento").value=precioFinalDescuento;
                        }
                        else
                        {
                            if (cantidadDeLamparas==3 && marcas != "FelipeLamparas" && marcas !="ArgentinaLuz") 
                            {
                                descuento=precioLampara*5/100;
                                precioFinalDescuento=precioLampara-descuento;
                                document.getElementById("txtIdprecioDescuento").value=precioFinalDescuento;
                            }
                            else
                            {
                                if (cantidadDeLamparas>5) 
                                {
                                    descuento=precioLampara*50/100;
                                    precioFinalDescuento=precioLampara-descuento;
                                }
                            }
                        }
                    }
                }
            }
            
        }
        
    }
   
}
 	
