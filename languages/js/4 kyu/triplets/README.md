# 3️⃣ Recover a secret string from random triplets

Nivel de dificultad: 4kyu <br>
Creado por: [zpconn](https://www.codewars.com/users/zpconn) 🚀

## 📖 Descripción

Hay una cadena secreta que desconoces. Dada una colección de tripletes aleatorios provenientes de la cadena, recupera la cadena original.

Un triplete se define como una secuencia de tres letras tal que cada letra aparece en algún lugar **antes** que la siguiente dentro de la cadena original. Por ejemplo, `"whi"` es un triplete válido para la cadena `"whatisup"`.

Como simplificación, puedes asumir que ninguna letra aparece más de una vez en la cadena secreta.

No puedes asumir nada sobre los tripletes que se te dan, aparte de que son tripletes válidos y que contienen suficiente información para deducir la cadena original. En particular, esto significa que la cadena secreta nunca contendrá letras que no aparezcan en alguno de los tripletes proporcionados.


## 📝 Resultados

### ✍️ Mi solución

```js
var recoverSecret = function(triplets = []) {
    const lettersSet = new (Set)
    let dissorderWord = Array.from(new Set(triplets.flat()))
    for (let triplet of triplets) {
        for (i=0;i<triplet.length;i++) {
            const tripletsLetter = triplets.filter((t = []) => t.includes(triplet[i]))
            if (!lettersSet.has(triplet[i])) {
                for (let newTriplet of tripletsLetter) {
                    for (j=0;j<newTriplet.length-1;j++) {
                            const firstCharacterPos = dissorderWord.indexOf(newTriplet[j])
                            const nextCharacterPos = dissorderWord.indexOf(newTriplet[j+1])
                            if (firstCharacterPos > nextCharacterPos) {
                                let firstChar = dissorderWord[firstCharacterPos]
                                let nextChar = dissorderWord[nextCharacterPos]
                                dissorderWord[firstCharacterPos] = nextChar
                                dissorderWord[nextCharacterPos] = firstChar
                            }
                        }
                    }
            }
            lettersSet.add(triplet[i])
        }
    }
    return dissorderWord.join("")
}
```

### 🌟 Solución mejor calificada (+61 iguales)

```js
var recoverSecret = function(triplets) {
  for(var [first] of triplets)
  {
    if (triplets.every(tuple => tuple.indexOf(first) <= 0))
    {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}
```

## 💡 Experiencia

Esta es de lejos mi peor resultado hasta ahora JAJA tuve varias formas de hacerlo hasta que al final opte por los for anidados buscando encontrar la solucion, la mejor solucion (que me esperaba algo asi porque sabia que el ejercicio era mas sencillo de lo que aparentaba) se me hizo interesante ya que usa algunas funciones que no suelo usar con frecuencia como **for(var [first] of triplets)** en el sentido de que desconocia que se podia tomar solo el primer valor de un array, **every (Recorre todos los elementos del array y evalúa una condición)** y **shift** (Elimina el primer elemento del array y lo devuelve).
