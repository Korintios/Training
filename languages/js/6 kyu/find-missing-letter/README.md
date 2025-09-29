# 🅰️ Find Missing Letter

Nivel de dificultad: 6kyu <br>
Creado por: [user5036852](https://www.codewars.com/users/user5036852) 🚀

## 📖 Descripción

Escribe un método que tome como entrada un **arreglo de letras consecutivas (en orden ascendente)** y que devuelva la **letra que falta** en el arreglo.

Siempre recibirás un arreglo válido. Y siempre faltará exactamente **una sola letra**.
La longitud del arreglo será como mínimo de 2.
El arreglo contendrá letras **solo en una misma forma** (todas mayúsculas o todas minúsculas).

**Ejemplo:**

```js
['a','b','c','d','f'] -> 'e'
['O','Q','R','S']     -> 'P'
```

(¡Usa el alfabeto inglés de 26 letras!)

Diviértete programándolo y por favor no olvides votar y calificar este kata. 🙂

También he creado otros katas. ¡Échales un vistazo si disfrutaste este!

**Categoría:** Matemáticas / Algoritmos

## 📝 Resultados

### ✍️ Mi solución

```js
function findMissingLetter(array) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let initLetter = array[0] !== "a" ? letters.indexOf(array[0]) : 0
  
  for (var i=0;i<array.length;i++) {
    if (array[i] !== letters[initLetter+i]) {
      return letters[initLetter+i]
    }
  }
}
```

### 🌟 Solución mejor calificada (+9 iguales)

```js
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}
```

## 💡 Experiencia

Lo unico que se me pudo complicar en este ejercicio que fue lo que estuve pensando unos minutos ya que no tarde en realidad en hacerlo era como hacer el recorrido el cual conclui que realizaria con una cadena de letras en un orden especifico con una variable de punto inicial la cual haria la comparacion, pero cuando vi el mejor resultado quede asi: 🤔

A lo cual me puse en la investigacion al respecto de que hacia **charCodeAt** y **fromCharCode**. Lo que hace la primera mencionada es devolver un caracterer en **formato UTF-16** y la otra hace lo contrario como en este ejemplo que me genero chatGpt.

```js
console.log(texto.charCodeAt(0)); // 65 → corresponde a "A"
console.log(texto.charCodeAt(1)); // 66 → corresponde a "B"
console.log(texto.charCodeAt(2)); // 67 → corresponde a "C"

console.log(String.fromCharCode(65));      // "A"
console.log(String.fromCharCode(66, 67));  // "BC"
```

Y pues siguiendo ese ejemplo es una solucion demasiado optima que para cualquiera que no conociera el uso de esa funcion buscaria otra salida JAJAJA, otra cosa aprendida jeje.