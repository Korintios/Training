# 🅿️ Most frequently used words in a text

Nivel de dificultad: 4kyu <br>
Creado por: [markprzepiora](https://www.codewars.com/users/markprzepiora) 🚀

## 📖 Descripción

Escribe una función que, dada una cadena de texto (posiblemente con puntuación y saltos de línea), devuelva un arreglo con las 3 palabras más frecuentes, en orden descendente según el número de ocurrencias.

**Suposiciones:**

* Una palabra es una cadena de letras (de la A a la Z) que puede contener opcionalmente uno o más apóstrofes (`'`) en ASCII.
* Los apóstrofes pueden aparecer al inicio, en medio o al final de una palabra (`'abc`, `abc'`, `ab'c` son todos válidos).
* Cualquier otro carácter (por ejemplo, `#`, `\`, `/`, `.`, etc.) no forma parte de una palabra y debe tratarse como espacio en blanco.
* Las coincidencias deben ser insensibles a mayúsculas/minúsculas, y las palabras en el resultado deben estar en minúsculas.
* Los empates pueden resolverse arbitrariamente.
* Si un texto contiene menos de tres palabras únicas, entonces se deben devolver solo las 2 o 1 más frecuentes, o un arreglo vacío si no hay palabras.

**Ejemplos:**

```text
"In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income."
```

--> `["a", "of", "on"]`

```text
"e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
```

--> `["e", "ddd", "aa"]`

```text
"  //wont won't won't"
```

--> `["won't", "wont"]`

**Puntos extra** (no realmente, solo por diversión):

* Evitar crear un arreglo cuyo consumo de memoria sea aproximadamente tan grande como el texto de entrada.
* Evitar ordenar todo el arreglo de palabras únicas.

## 📝 Resultados

### ✍️ Mi solución

```js
function topThreeWords(text) {
    // Organizamos y filtramos las palabras encontradas.
    const filteredWords = text.split(" ").filter((i) => /[aA-zZ]/.test(i))

    // Creamos un diccionario en base a las palabras encontradas
    const structureWords = filteredWords.reduce((acc = {}, word) => {
        acc[word.toLowerCase()] = (acc[word.toLowerCase()] || 0) + 1
            return acc
    }, {})

    // Transformamos el diccionario de palabras en un array para ordenarlo y devolverlo nuevamente como un diccionario organizado con las 3 palabras mas usadas.
    const arrayWords = Object.fromEntries(Object.entries(structureWords).sort((a,b) => b[1] - a[1]).splice(0,3))
    return Object.keys(arrayWords).map((word) => word.match(/([A-Za-z']+)$/)[0])
}
```

### 🌟 Solución mejor calificada (3 iguales)

```js
// 07.09.2018
let topThreeWords = text => {
    let dict = new Map();
    text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
        let word = match.toLowerCase();
        dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
    });
    dict.delete("'");
    return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
};
```

## 💡 Experiencia

Mi solucion al principio era una completamente a la que salio al final porque tuve el presentimiento que el reduce iba a ser una mejor solucion por como funciona internamente dicha funcion (que investigue mas al respecto para entenderla bien porque aun no la captaba del todo) y asi fue jeje aprendi mas sobre **Object** y sus distintos metodos como **entries** y **fromEntries** que convierten un objeto en array y biseversa.
