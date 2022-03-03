var compra = parseFloat(prompt("ESCRIBE EL VALOR DE LA COMPRA"));
var category = prompt(" ESCRIBE CATEGORIA DEL CLIENTE");
var bo;

switch (category) {
    case "A":
        var bo = compra*(0.10); 
        total =  compra - bo;
        
        break;
    case "B" :
        var bo= compra*(0.15);
        total = compra - bo; 
        break;
    case "C":
        var bo= compra*(0.20);
        total = compra - bo;
        break;
}

document.write("El descuento por categoria es: ", bo);
document.write('<br>');
document.write("el total de la compra con descuento es: ", + total)