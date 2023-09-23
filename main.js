alert("Bienvenido/a al simulador de préstamos online!");

let montoPrestamo = parseFloat(prompt("Por favor, ingrese el monto que desea solicitar"));
let cantCuotas = parseInt(prompt("Ingrese en cuántas cuotas lo desea abonar. (Máximo 12 cuotas)"));
let interesAplicado = 0;

function calcularInteres(cantCuotas){
    if(cantCuotas > 0 && cantCuotas <= 3){
        interesAplicado = 1.05;
    }else if(cantCuotas > 3 && cantCuotas <= 6){
        interesAplicado = 1.10;
    }else if(cantCuotas > 6 && cantCuotas <= 9){
        interesAplicado = 1.15;
    }else if(cantCuotas > 9 && cantCuotas <= 12){
        interesAplicado = 1.20;
    }else{
        alert("Por favor, ingrese un valor entre 1 y 12 para las cuotas.")
    }

}
calcularInteres(cantCuotas);

if(interesAplicado !== 0){
    alert("El interés es de " + ((interesAplicado*100)- 100) + "% y abonará un total de $" + (montoPrestamo*interesAplicado)+ ".")
    alert("El detalle de cada cuota lo verá impreso por consola. Muchas gracias.")
    for (let i = 1; i <= cantCuotas; i++ ){
    console.log("La cuota n°" + i + " es de $" + ((montoPrestamo/cantCuotas)*interesAplicado) +".")
    }
}   

