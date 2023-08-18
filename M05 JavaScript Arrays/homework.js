/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
  //  return array[0];
   return array.shift();
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   /*let reversed = array.reverse();
   return reversed[0];*/
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let increment = array.map( (e) => e + 1 )
   return increment;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
  //  for (let i = 0; i < array.length; i++) {
  //   if ( array[i] === elemento ) return true;
  //  }
  //  return false
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
  //  let sumArray = arrayOfNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 );
   return arrayOfNums.reduce( (acc, cur) => acc + cur );
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
  //  let sumArray = resultadosTest.reduce( (acc, cur) => acc + cur, 0 );
  //  let promedio = sumArray / resultadosTest.length;
  // return promedio;
  return agregarNumeros(resultadosTest) / resultadosTest.length;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
  //  for (let i = 0; i < arrayOfNums.length; i++) {
  //   if ( arrayOfNums[i] > arrayOfNums[i + 1] ) {
  //     return arrayOfNums[i];
  //   }
  //  }
   return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if ( arguments.length === 0 ) return 0;
   var multiplicar = 1;

   for (let i = 0; i < arguments.length; i++) {
    multiplicar = multiplicar * arguments[i];
   }

   return multiplicar
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let elementos = 0;
   array.map((item) => {
    if ( item > 18 ) {
      elementos ++
    }
   });
   return elementos;
   
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
    if ( numeroDeDia === 1 || numeroDeDia === 7 ) return "Es fin de semana"
    else return "Es dia laboral"
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return num.toString().charAt(0) === '9' ? true : false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
    if ( array[i] === array[i + 1] ) return true
    else return false
   }
}



function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let mesesEncontrados = [];
   for(let i = 0 ; i < array.length ; i++ ) {
    if ( array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre' ) {
      mesesEncontrados.push( array[i] )
    }
   }

   if ( mesesEncontrados.length === 3 ) return mesesEncontrados
   else return 'No se encontraron los meses pedidos';

}

function tabla(num, limit = 10, array) {
  for (let i = 0; i <= limit; i++) {
    let total = i * num
    array.push( total );
  }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let res = [];
   tabla(6, 10,res);
   return res;
}
  
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
  //  let mayores = [];
  //  for (let i = 0; i < array.length; i++) {
  //   if ( array[i] > 100 ) mayores.push( array[i] );
  //  }
  //  return mayores;

   let mayores = array.filter( num => num > 100 );
   return mayores;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let iterArray = [];
   let limite = 0;
   do {
     num += 2
     limite++
     iterArray.push(num);
     if ( limite === num ) break
   } while (limite < 10);

   if ( iterArray.length === 10 ) return iterArray;
   else return 'Se interrumpió la ejecución';
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let iterArray = [];
   let limite = 0;
   do {
     num += 2
     console.log(limite);
     limite++
     iterArray.push(num);
     console.log(iterArray);
     if ( limite % 5 === 0  ) continue 
     console.log(limite);
    } while (limite < 9);
   console.log(iterArray);
   return iterArray


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
