# 📄 Titulo de Ejercicio

Nivel de dificultad: 5kyu <br>
Creado por: [g964](https://www.codewars.com/users/g964) 🚀

## 📖 Descripción

Érase una vez, en un camino a través del viejo y salvaje oeste montañoso…
… a un hombre le dieron direcciones para ir de un punto a otro. Las direcciones eran "NORTH" (norte), "SOUTH" (sur), "WEST" (oeste), "EAST" (este). Claramente, "NORTH" y "SOUTH" son opuestos, al igual que "WEST" y "EAST".

Ir en una dirección y regresar inmediatamente en la dirección opuesta es un esfuerzo inútil. Como se trata del salvaje oeste, con un clima terrible y poca agua, es importante ahorrar energía, ¡de lo contrario podrías morir de sed!

**Cómo crucé un desierto montañoso de la forma más inteligente.**
Las direcciones dadas al hombre son, por ejemplo, las siguientes (dependiendo del lenguaje):

```
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]  
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" }  
[North, South, South, East, West, North, West]  
```

Puedes notar de inmediato que ir al "NORTH" y enseguida al "SOUTH" no tiene sentido, ¡mejor quedarse en el mismo lugar! Así que la tarea es darle al hombre una versión simplificada del plan.
Un mejor plan en este caso sería simplemente:

```
["WEST"]  
{ "WEST" }  
[West]  
```

**Otros ejemplos:**

* En `["NORTH", "SOUTH", "EAST", "WEST"]`, la dirección "NORTH" + "SOUTH" significa ir al norte y regresar enseguida.
  El camino se convierte en `["EAST", "WEST"]`, ahora "EAST" y "WEST" se anulan entre sí, por lo tanto, el resultado final es `[]` (nil en Clojure).

* En `["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]`, "NORTH" y "SOUTH" no son directamente opuestos, pero se vuelven directamente opuestos después de reducir "EAST" y "WEST".
  Así, todo el camino se reduce a `["WEST", "WEST"]`.

---

### **Tarea**

Escribe una función `dirReduc` que reciba un arreglo de cadenas y devuelva un arreglo con las direcciones innecesarias eliminadas (cuando se anulan entre sí W<->E o S<->N).

* La versión en Haskell recibe una lista de direcciones con `data Direction = North | East | West | South`.
* La versión en Clojure devuelve `nil` cuando el camino se reduce a nada.
* La versión en Rust recibe un slice del enum `Direction {North, East, West, South}`.
* La versión en OCaml recibe una lista del tipo `direction = | North | South | East | West`.

---

### **Notas**

No todos los caminos pueden simplificarse.
El camino `["NORTH", "WEST", "SOUTH", "EAST"]` no es reducible.

* "NORTH" y "WEST" no son opuestos.
* "WEST" y "SOUTH" no son opuestos.
* "SOUTH" y "EAST" no son opuestos.

Por lo tanto, el resultado del camino es el mismo:
`["NORTH", "WEST", "SOUTH", "EAST"]`.

## 📝 Resultados

### ✍️ Mi solución

```js
function dirReduc(arr = []) {

    let stack = []

    function areOpposite(dir1, dir2) {
        const opposites = {
            "NORTH": "SOUTH",
            "SOUTH": "NORTH",
            "EAST": "WEST",
            "WEST": "EAST"
        };

        return opposites[dir1] === dir2;
    }

    for (var i=0; i<arr.length; i++) {
        if (areOpposite(stack[stack.length - 1], arr[i])) {
            // Si el ultimo valor de la matriz es opuesto al actual, se elimina de la fila.
            stack.pop()
            console.log(stack)
        }
        else {
            // Si el ultimo valor no es opuesto se añade a la fila.
            stack.push(arr[i])
            console.log(stack)
        }
    }

    return stack
}
```

### 🌟 Solución mejor calificada (+70 iguales)

```js
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
```

## 💡 Experiencia

Este ejercicio me tomo alrededor de 4 horas finalizarlo con orientacion y ayuda de ChatGPT en la ultima hora, fue un ejercicio con el que tuve diversas dudas respecto a como lo podria hacer debido a la escabilidad que le dia en mi mente jaja :,) pero despues de recibir la orientacion y estarlo leyendo durante un buen rato entendi como funcionaba, desde cierto punto supe que debia usar pilas para este ejercicio pero no sabia como aplicarlo hasta que al final con la respectiva ayuda lo entendi. Incluso investigue al respecto y es un ejercicio famoso en entrevistas tecnicas... Asi que para el que llegue a leer esto practicalo con calma este y muchos mas ejercicios. Asi se va puliendo la logica poco a poco 🫂