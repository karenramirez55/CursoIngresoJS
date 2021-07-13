//AUTOR: Ramirez Karen Denise, EJERCICIO: Parcial 2019 (03).

function mostrar()
{
    let precio;
    let porcentajeDeDescuento;
    let precioFinal;
    let descuento;
    let precioFinalConDescuento;
    let mensaje;

    precio=prompt("Ingrese el precio");
    precio=parseInt(precio);
    porcentajeDeDescuento=prompt("Ingrese el porcentaje de descuento");
    porcentajeDeDescuento=parseInt(porcentajeDeDescuento);
    descuento=precio*porcentajeDeDescuento/100;
    precioFinalConDescuento=precio-descuento;
    mensaje="El precio final con descuento es "+precioFinalConDescuento;
    document.getElementById("elPrecioFinal").value=mensaje;
    

    
}
