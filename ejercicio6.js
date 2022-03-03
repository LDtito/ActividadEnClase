//Calcular el valor de descuento y valor a pagar por la compra de cierta cantidad de un articulo , 
//si se conoce el precio unitario 
var subtotal, descuento, total, cantarticulos;
let pv = 7.50;
let x = 0;


    cantarticulos = parseInt(prompt("Escriba cantidad de articulos (el P.U de los articulos es 7,50)"))
    subtotal = cantarticulos * pv

if (subtotal <= 100) {
    descuento = subtotal * 0.02;
    total =  subtotal - descuento ;
}else {
    if (subtotal <= 250) {
        descuento = subtotal * 0.05;
        total = subtotal - descuento;

    }else {
        if (subtotal <= 800) {
            descuento = subtotal * 0.08;
            total = subtotal - descuento;

        } else{
            descuento = subtotal * 0.12;
            total = subtotal - descuento;

        }
    }
}
document.write('el subtotal de la compra es: ', + subtotal);
document.write('<br>');
document.write('el total de la compra es: ', + total);

