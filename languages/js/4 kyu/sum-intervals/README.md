# 📄 Titulo de Ejercicio

Nivel de dificultad: 4kyu <br>
Creado por: [xDranik](https://www.codewars.com/users/xDranik) 🚀

## 📖 Descripción

Escribe una función llamada `sumIntervals` (o `sum_intervals`) que acepte un arreglo de intervalos y retorne la **suma de todas las longitudes de los intervalos**.
Los intervalos que se **superponen** deben contarse **solo una vez**.


### Intervalos

Los **intervalos** se representan mediante un par de enteros dentro de un arreglo.
El **primer valor** del intervalo siempre será **menor** que el **segundo valor**.

Ejemplo de intervalo:

```js
[1, 5]
```

Este intervalo va de `1` a `5`, por lo tanto su longitud es `4`.

### Intervalos superpuestos

Ejemplo de lista que contiene intervalos superpuestos:

```js
[
  [1, 4],
  [7, 10],
  [3, 5]
]
```

La suma de las longitudes de estos intervalos es `7`.
Dado que `[1, 4]` y `[3, 5]` se **superponen**, podemos tratarlos como un solo intervalo `[1, 5]`, cuya longitud es `4`.

### Ejemplos

```js
sumIntervals([
  [1, 2],
  [6, 10],
  [11, 15]
]) => 9
```

```js
sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
]) => 7
```

```js
sumIntervals([
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
]) => 19
```

```js
sumIntervals([
  [0, 20],
  [-100000000, 10],
  [30, 40]
]) => 100000030
```

### Pruebas con intervalos grandes

Tu algoritmo debe ser capaz de **manejar intervalos grandes**.
Todos los intervalos probados serán **subconjuntos del rango**:

```
[-1000000000, 1000000000]
```


## 📝 Resultados

### ✍️ Mi solución

```js
function sumIntervals(intervals) {
	// Ordenar los intervalos
	let orderIntervals = intervals
		.sort((a, b) => a[0] - b[0])
		.filter((item) => item[0] < item[1]);

	// Remover intervalos superpuestos.
	let newIntervals = [];

	console.log(orderIntervals);

	for (let i = 0; i < orderIntervals.length; i++) {
		if (newIntervals.length === 0) {
			// Primer intervalo
			newIntervals.push(orderIntervals[i]);
		} else {
			let lastInterval = newIntervals[newIntervals.length - 1];

			if (orderIntervals[i][0] <= lastInterval[1]) {
				// Hay superposición, fusionar intervalos
				lastInterval[1] = Math.max(lastInterval[1], orderIntervals[i][1]);
			} else {
				// No hay superposición, agregar nuevo intervalo
				newIntervals.push(orderIntervals[i]);
			}
		}
	}

	console.log(newIntervals);
	// Retornamos los intervalos sumados.
	return newIntervals.reduce(
		(acc, item) => acc + Math.abs(item[0] - item[1]),
		0
	);
}
```

### 🌟 Solución mejor calificada (+6 iguales)

```js
function sumIntervals(xs) {
  let ys = xs.sort(([a,b], [c,d]) => a-c);
  let m = -Number.MAX_VALUE;
  let res = 0;
  for (let [a,b] of ys) {
    m = Math.max(m, a);
    res += Math.max(0, b-m);
    m = Math.max(m, b);
  }
  return res;
}
```

## 💡 Experiencia

La verdad es que mi principal problema con este ejercicio fue el almacenamiento del valor mayor... Me puso mucho en duda y me apoye con inteligencia artificial (estos ejercicios de 4 kyu me llevan a ese extremo pero seguro con el tiempo lo dejo jeje) hice casi el 80% del ejercicio de no ser porque la IA me hizo una nueva logica en la cual en ves de eliminar el array anterior por uno nuevo en una logica que usaba un algoritmo donde añadia y luego eliminaba esta modificaba el actual sin necesidad de eliminarlo cosa que no se me ocurrio. Saludos!
