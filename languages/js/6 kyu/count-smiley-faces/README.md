

# 😝 Count the smiley faces!

Nivel de dificultad: 6kyu <br>
Creado por: [St3f4n](https://www.codewars.com/users/St3f4n) 🚀

## 📖 Descripción

Dado un arreglo (**arr**) como argumento, completa la función **countSmileys** que debe devolver el número total de caritas sonrientes.

**Reglas para una carita sonriente:**

* Cada carita debe contener un par de **ojos válidos**. Los ojos pueden ser representados como `:` o `;`.
* Una carita puede tener una **nariz**, pero no es obligatorio. Los caracteres válidos para la nariz son `-` o `~`.
* Cada carita sonriente debe tener una **boca sonriente**, que puede ser `)` o `D`.
* No se permiten caracteres adicionales excepto los mencionados.

**Ejemplos de caritas válidas:** `:)` `:D` `;-D` `:~)`
**Ejemplos de caritas inválidas:** `;(` `:>` `:}` `:]`

**Ejemplo**

```javascript
countSmileys([':)', ';(', ';}', ':-D']);       // debería devolver 2
countSmileys([';D', ':-(', ':-)', ';~)']);     // debería devolver 3
countSmileys([';]', ':[', ';*', ':$', ';-D']); // debería devolver 1
```

**Nota**
En caso de un arreglo vacío, devuelve **0**.
No se probará con entradas inválidas (la entrada siempre será un arreglo).
El orden de los elementos de la cara (ojos, nariz, boca) siempre será el mismo.

## 📝 Resultados

### ✍️ Mi solución

```js
function countSmileys(arr = []) {
  return arr.reduce((acc, item) => acc + (/[;:][-~]?[D)]/.test(item) ? 1 : 0), 0);
}
```

### 🌟 Solución mejor calificada (+45 iguales)

```js
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
```

## 💡 Experiencia

Un ejercicio sencillo que no me tomo mucho tiempo, teniendo en cuenta lo aprendido con ejercicios anteriores quise aplicar expresiones regulares que vi como la salida mas facil aunque quede respecto a la duda si usar reduce o filter para hacer algo mas optimo el codigo, aunque al final despues de entregar el codigo exitosamente y ver el mejor resultado me di cuenta de mi ligera falla jeje.
