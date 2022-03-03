//Crear un programa que me permita ingresar la edad de 20 personas, y al final mostrar cuantos mayores y menos de edad hay.
let cantmayores = 0;
let cantmenores = 0;
let x = 0;
let edad1;
while (x <= 20) {
    edad1 = parseInt(prompt('Ingrese una edad'));
    if (edad1 >= 18) {
        cantmayores = cantmayores + 1;
    } else {
        cantmenores = cantmenores + 1;
    }
    x = x + 1;
}
document.write('Cantidad de personas mayores de edad:' + cantmayores);
document.write('<br>');
document.write('Cantidad de personas menores de edad:' + cantmenores);
