# 📄 Titulo de Ejercicio

Nivel de dificultad: 4kyu <br>
Creado por: [jhoffner](https://www.codewars.com/users/jhoffner) 🚀

## 📖 Descripción

Un formato para expresar una lista ordenada de números enteros es utilizar una lista separada por comas de

enteros individuales
o un rango de enteros, denotado por el entero inicial separado del entero final del rango por un guion, '-'. El rango incluye todos los enteros del intervalo, incluidos ambos extremos. No se considera un rango a menos que abarque al menos tres números. Por ejemplo, "12,13,15-17".
Complete la solución para que tome una lista de números enteros en orden creciente y devuelva una cadena con el formato correcto en el formato de rango.

Ejemplo:

```js
solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
```

Cortesía de rosettacode.org

## 📝 Resultados

### ✍️ Mi solución

```js
function solution(list = []){
    let numberAccumulator = []
    const numberList = list.reduce((acc,item,i) => {
        if (item+1 === list[i+1]) {
            numberAccumulator.push(item)
        }

        if (item+1 !== list[i+1]) {
            numberAccumulator.push(item)
            if (numberAccumulator.length >= 3) {
                acc.push(`${numberAccumulator[0]}-${numberAccumulator[numberAccumulator.length-1]}`)
                numberAccumulator = [];
                return acc;
            } else {
                acc.push(...numberAccumulator.map(String));
                numberAccumulator = [];
                return acc
            }
        }
        return acc;
    },[])
    return numberList.join(",")
}
```

### 🌟 Solución mejor calificada (+65 iguales)

```js
function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}
```

## 💡 Experiencia

Creo que le eh agarrado una mala mania al reduce (aun estoy aprendiendo a usarlo) jeje debo explorar mas opciones a partir de ahora, el ejercicio no fue un problema esta vez, falto pulir mas la logica.
