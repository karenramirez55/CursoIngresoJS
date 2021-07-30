/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	 var nombre;
	 var edad;
	 var genero;
	 var vacuna;
	 var temperatura;
	 var preguntaControlComando;
	 var flag;
	 var mayorTemperatura;
	 var nombrePersonaMayorTemperatura;
	 var vacunaMayorTemperatura;
	 var contadorFemeninoSputnikv;
	 var contadorNb;
	 var contadorAztranecaMayor38;
	 var contadorHombresSinFiebreSputnikv;
	 var acumuladorHombresSinFiebreSputnikv;
	 var promedio;

	 contadorAztranecaMayor38=0;
	 acumuladorHombresSinFiebreSputnikv=0;
	 contadorNb=0;
	 contadorHombresSinFiebreSputnikv=0;
	 contadorFemeninoSputnikv=0;
	 flag=0;
	 preguntaControlComando="si";

	 while(preguntaControlComando=="si")
	 {
				nombre=prompt("ingrese su nombre");
				edad=prompt("ingrese su edad");
				edad=parseInt(edad);
				genero=prompt("ingrese genero: 'f , m, nb' ");
				while(genero!="f" && genero!="m" && genero!="nb")
				{
					genero=prompt("reingrese genero: 'f , m, nb' ");
				}
				vacuna=prompt("ingrese 'sputnikv, aztrazeneca, otra' ");
				while(vacuna!="sputnikv" && vacuna!="aztrazeneca" && vacuna!="otra")
				{
					vacuna=prompt("reingrese 'sputnikv, aztrazeneca, otra' ");
				}
				temperatura=prompt("ingrese temperatura");
				temperatura=parseInt(temperatura);
				if (flag==0 || temperatura>mayorTemperatura) 
				{
					mayorTemperatura=temperatura;
					nombrePersonaMayorTemperatura=nombre;
					vacunaMayorTemperatura=vacuna;
					flag=1;
				}
				if (genero=="f" && vacuna=="sputnikv") 
				{
					contadorFemeninoSputnikv++;
				}
				if (genero=="nb") 
				{
					if (vacuna=="aztrazeneca" || vacuna=="otra") 
					{
						contadorNb++;
					}
				}
				if (vacuna=="aztrazeneca" && temperatura>38) 
				{
					contadorAztranecaMayor38++;
				}
				if (genero=="m" && temperatura<38 && vacuna=="sputnikv") 
				{
					contadorHombresSinFiebreSputnikv++;
					acumuladorHombresSinFiebreSputnikv=acumuladorHombresSinFiebreSputnikv+edad;
					promedio=acumuladorHombresSinFiebreSputnikv/contadorHombresSinFiebreSputnikv;
				}
				preguntaControlComando=prompt("quiere seguir ingresando datos, 'si o no' ");
	 }
	 alert("El nombre de la persona con mayor temperatura es "+nombrePersonaMayorTemperatura+ " la vacuna que se aplico es "+vacunaMayorTemperatura+" la cantida de Femeninas que recibieron la sputnikv son: "+contadorFemeninoSputnikv+ " la cantida de NB que recibieron aztrazeneca u otra son : "+contadorNb+" la cantidad d personas con aztrazeneca y temperatura mayor a 38 son "+contadorAztranecaMayor38+" promedio de edad hombres con sputnik y no presentaron fiebre mayor a 37 son: "+promedio);
}
