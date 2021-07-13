//AUTOR: Ramirez Karen Denise, EJERCICIO: Parcial 2019 02//
function mostrar()

{
  let nombre1;
  let peso1;
  let nombre2;
  let peso2;
  let mensaje;
  let suma;
  let promedio;

  nombre1=prompt("Ingrese su nombre");
  peso1=prompt("Ingrese su peso");
  peso1=parseInt(peso1);
  

  nombre2=prompt("Ingrese su nombre");
  peso2=prompt("Ingrese su peso");
  peso2=parseInt(peso2);
  suma=peso1+peso2;
  promedio=suma/2;
  mensaje="Uds se llaman "+nombre1+ " y "+nombre2+ "  pesan KG "+ peso1 + " y "+ peso2 +"  la suma de sus pesos son: "+suma+ " y el promedio de ellos es "+ promedio;
  alert(mensaje);


  


}
