var nnotas;
var promedio;
var suma=0;
var i=1;
var apellido;
var nombre;
var nnotas=parseInt(prompt("Ingrese la cantidad de notas a promediar"))

for (i=1; i<=nnotas;  i++){

   var notas = parseInt(prompt("Digite la nota " + i)) ;
   suma = suma + notas; 

}
promedio= suma / nnotas;
alert("El promedio de los valores ingresados es " + promedio);
