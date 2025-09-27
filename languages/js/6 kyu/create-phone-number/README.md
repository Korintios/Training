# 📞 Create Phone Number

Nivel de dificultad: 6kyu <br>
Creado por: [xDranik](https://www.codewars.com/users/Rubikan) 🚀

## 📖 Descripción

Escribe una función que reciba un arreglo de 10 enteros (entre 0 y 9) y que devuelva una cadena con esos números en el formato de un número de teléfono.

### 🧩 Ejemplo

```js
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
// => devuelve "(123) 456-7890"
```

El formato devuelto debe ser **exacto** para completar este reto.
¡No olvides el espacio después del paréntesis de cierre!

## 📝 Resultados

### ✍️ Mi solución

```js
function createPhoneNumber(numbers){
  var firstNumbers = numbers.slice(0,3).join("")
  var midNumbers = numbers.slice(3,6).join("")
  var endNumbers = numbers.slice(6,11).join("")
  
  return `(${firstNumbers}) ${midNumbers}-${endNumbers}`
}
```

### 🌟 Solución mejor calificada (+1400 votos)

```js
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
```

## 💡 Experiencia

La verdad fue un ejercicio interesante que al principio no sabía bien cómo abordar 🤯.
Decidí dividir el problema en partes más pequeñas (los fragmentos de números) hasta llegar al resultado esperado.

Sentí que estaba repitiendo código, pero me permití esperar a ver cómo otros lo resolvían.
Al final conocí más a fondo la función **`replace`**, que permite reemplazar texto y resulta muy eficiente en este caso gracias al ciclo `for`.
