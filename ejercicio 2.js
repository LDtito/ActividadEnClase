var suma=0;
do{
    var numeros= prompt("Ingresa los numeros que va a sumar");
    if (Number(numeros) == numeros){
     numeros= Number(numeros);
     suma= suma+numeros;
    }
    else{
             if(numeros != undefined){
                
           alert(numeros + "No es un numero");
             }
    
    }
   
}while  (numeros != 0);

document.write("La suma de los numeros es: ", + suma);