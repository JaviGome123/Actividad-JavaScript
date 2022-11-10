/**
 * @author: Javier Gomez
 * Comprueba la mayoría de edad
 * @param {*} edad 
 * @returns true | false;
 */

function esMayorEdad(edad)
{
    
        return (edad>=18);
    
    // Completa el código de la función
}
/**
 * Obtiene la calificación equivalente a la nota numérica
 * @param {*} nota: integer. 
 * @returns  cadena: Calificación
 */
function obtenerCalificacion(nota)
{
                 if(nota >= 0 && nota <3)
                   var calificacion="Muy deficiente";
                else if(nota >= 3 && nota < 5)
                    calificacion="Insuficiente";
                else if(nota >= 5 && nota < 6)
                    calificacion="Suficiente";
                else if(nota >= 6 && nota < 7)
                    calificacion="Bien";
                else if(nota >= 7 && nota < 9)
                    calificacion="Notable";  
                else if(nota >= 9 && nota <=10)
                   calificacion="Sobresaliente";
                else
                    calificacion="Incorrecta";

                    return calificacion;
}
/**
 * Comprueba la mayoria de edad en la página HTML.
 */
function comprobarEdad()
{
    var edad=Number.parseInt(document.getElementById("edad").value);
    console.log('Edad: '+edad);
    console.log('Mayoría de edad?: '+esMayorEdad(edad));
    var txtEdad="Usted es menor de edad."
    
    if(esMayorEdad(edad))
        txtEdad="Usted es mayor de edad."
    
    document.getElementById("txtEdad").innerHTML=txtEdad;
    
}
/**
 * Escribe la calificación asociada a la nota en la página HTML.
 */
function averiguarCalificacion()
{
    var nota=Number.parseInt(document.getElementById("nota").value);
    console.log('Nota: '+nota);
    console.log('Calificación: '+obtenerCalificacion(nota));
        
    document.getElementById("txtCalificacion").innerHTML="Calificación: "+obtenerCalificacion(nota);
}
