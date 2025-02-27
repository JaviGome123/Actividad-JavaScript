/**
 * Ejercicio 12. Calculadora JavaScript
 * Autor: 
 */

/**
 * Implementa el Menú 1: Sumar
 * @author: Javier Gómez.
 * @return suma
 */
function menu1()
{
    // Implemente la opción de la calculadora que permite sumar.
    console.info("Suma:");
    let sumando1=parseInt(prompt("Introduzca el primer sumando: ",0));
    let sumando2=parseInt(prompt("Introduzca el segundo sumando: ",0));
    let resultado=sumando1+sumando2;
    console.log("El resultado de la suma "+sumando1+" + "+sumando2+" es "+resultado);
    return resultado;
}

/**
 * Implementa el Menú 2: Restar
 * @author: Javier Gómez.
 * @return resta
 */
function menu2()
{
    // Implemente la opción de la calculadora que permite restar.
    console.info("Resta:");
    // IMPLEMENTA TU CÓDIGO AQUÍ
    let minuendo=parseInt(prompt("Introduzca el minuendo: ",0));
    let sustraendo=parseInt(prompt("Introduzca el sustraendo: ",0));
    let resultado2=minuendo-sustraendo;

    console.log("El resultado de la resta "+minuendo+" - "+sustraendo+" es "+resultado2);
    return resultado2;
}
/**
 * Implementa el Menú 3: Multiplicar
 * @author: Javier Gómez.
 * @return multiplicación
 */
function menu3()
{
    // Implemente la opción de la calculadora que permite multiplicar.
    console.info("Multiplica:");
    
    // IMPLEMENTA TU CODIGO AQUÍ 
    let multiplicando=parseInt(prompt("Introduzca el primer número a multiplicar: ",0));
    let multiplicador=parseInt(prompt("Introduzca el segundo número a multiplicar: ",0));
    let resultado3=multiplicando*multiplicador;

    console.log("El resultado de la multiplicación de "+multiplicando+" * "+multiplicador+" es "+resultado3);

    return resultado3;
}

/**
 * Implementa el Menú 4: Dividir
 * @author: Javier Gómez.
 * @return división
 */
function menu4()
{
    // Implemente la opción de la calculadora que permite dividir.
    console.info("Divide:");
    
    let dividendo=parseInt(prompt("Introduzca el número a dividir: ",0));
    let divisor=parseInt(prompt("Introduzca el número por el que quieres dividir: ",0));
    let resultado4=dividendo/divisor;

    if(resultado4 >= 0){

    console.log("El resultado de la  división de "+dividendo+" / "+divisor+" es "+resultado4);

    // IMPLEMENTA TU CÓDIGO AQUÍ

    return resultado4;
    }
    else

    console.log("Error");

}

/**
 * Menú Aplicación Calculadora
 * @author: José Gaspar Sánchez García.
 */
function appMenu()
{
    let opcion=-1;
    do{
        console.log("\n*** CALCULADORA ***\n");
        console.log("Menú:");
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("0. Salir");
        opcion=parseInt(prompt("Introduzca opción: "));

        switch(opcion)
        {
            case 1: {menu1();break;}
            case 2: {menu2();break;}
            case 3: {menu3();break;}
            case 4: {menu4();break;}
            case 0: {console.info("Saliendo aplicación calculadora.");break;}
            default: {console.error("Error: Opción "+opcion+" incorrecta."); break;}
        }

    }while(opcion!=0)
}