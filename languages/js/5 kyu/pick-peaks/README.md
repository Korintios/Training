# 🚵🏻‍♂️ Pick peaks

Nivel de dificultad: 5kyu <br>
Creado por: [frenetic_be](https://www.codewars.com/users/frenetic_be) 🚀

## 📖 Descripción

En este kata, escribirás una función que devuelva las posiciones y los valores de los "picos" (o máximos locales) de un arreglo numérico.

Por ejemplo, el arreglo `arr = [0, 1, 2, 5, 1, 0]` tiene un pico en la posición `3` con un valor de `5` (ya que `arr[3]` es igual a `5`).

La salida debe devolverse como un objeto con dos propiedades: `pos` y `peaks`. Ambas propiedades deben ser arreglos. Si no hay ningún pico en el arreglo dado, entonces la salida debe ser:

```js
{pos: [], peaks: []}
```

**Ejemplo:**

```js
pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
```

debe devolver

```js
{pos: [3, 7], peaks: [6, 3]}
```

(o su equivalente en otros lenguajes).

Todos los arreglos de entrada serán arreglos de enteros válidos (aunque podrían estar vacíos), así que no necesitarás validar la entrada.

Los **primeros y últimos elementos** del arreglo **no serán considerados como picos** (en el contexto de una función matemática, no sabemos qué hay antes o después, y por lo tanto, no sabemos si son un pico o no).

⚠️ También, ¡cuidado con las **mesetas**!

* `[1, 2, 2, 2, 1]` tiene un pico.
* `[1, 2, 2, 2, 3]` y `[1, 2, 2, 2, 2]` **no lo tienen**.

En el caso de un pico en meseta, devuelve solo la posición y el valor **del inicio de la meseta**.

Por ejemplo:

```js
pickPeaks([1, 2, 2, 2, 1])
```

devuelve

```js
{pos: [1], peaks: [2]}
```

(o su equivalente en otros lenguajes).

## 📝 Resultados

### ✍️ Mi solución

```js
function pickPeaks(arr = []){
    let possiblyPableau = undefined;
    // Si no, recorremos el array con el objetivo de crear un diccionario.
    const posAndPeaks = arr.reduce((acc, item, i) => {
        // Si el numero es mayor que el siguiente y mayor que el anterior se añade o si se da el caso que el numero es igual o mayor al siguiente tambien aplica.
        if (item > arr[i+1] && arr[i-1] < item) {
            acc.pos = [...acc.pos, i];
            acc.peaks = [...acc.peaks, item];
        }

        // Inicio de posible meseta.
        if (item === arr[i+1] && item > arr[i-1]) {
            // Almacenamos la meseta.
            possiblyPableau = i;
        }

        if (possiblyPableau !== undefined) {
            // Se descarta la meseta si el numero sigue subiendo.
            if (item < arr[i+1] && arr[possiblyPableau] === item) {
                possiblyPableau = undefined;
            }

            // Se añade la meseta si el numero siguiente es menor que el actual y se encuentra en la posible meseta guardada.
            if (item > arr[i+1] && arr[possiblyPableau] === item) {
                acc.pos = [...acc.pos, possiblyPableau];
                acc.peaks = [...acc.peaks, item];
                possiblyPableau = undefined;
            }
        }

        return acc;
    }, {pos: [], peaks: []})

    return posAndPeaks
}
```

### 🌟 Solución mejor calificada (+72 iguales)

```js
function pickPeaks(arr){
  var result = {pos: [], peaks: []};
  if(arr.length > 2) {
    var pos = -1;
    for(var i=1; i<arr.length;i++){
      if(arr[i] > arr[i-1]) {
        pos = i;
      } else if(arr[i] < arr[i-1] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}
```

## 💡 Experiencia

Esta vez aplique los reduce de mejor manera, me guie por ejercicios anteriores y pense que seria una opcion que funcionaria teniendo en cuenta los datos que necesitabamos exportar, tuve algunas dudas sobre como sobrellevar las mesetas asi que solicite ayuda de ChatGPT para recibir orientacion y al final lo logre con una variable temporal aunque cuando vi el mejor ejercicio quede asi: 😐

Pero bueno JAJAJA de eso se trata aprender.
