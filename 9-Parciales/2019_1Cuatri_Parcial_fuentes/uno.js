//AUTOR: Ramirez Karen Denise, EJERCICIO: Parcial 2019 01//

function mostrar()
{
    let ladoA;
    let ladoB;
    let ladoC;
    let perimetro;
    let mensaje;

    ladoA=prompt("Ingrese medida de lado N°1");
    ladoA=parseInt(ladoA);
    ladoB=prompt("Ingrese medida de lado N°2");
    ladoB=parseInt(ladoB);
    ladoC=prompt("Ingrese medida de lado N°3");
    ladoC=parseInt(ladoC);
    perimetro=ladoA+ladoC+ladoB;
    mensaje="El perimetro es: "+perimetro;
    alert(mensaje);



}
