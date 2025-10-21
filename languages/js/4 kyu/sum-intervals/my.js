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

console.log(sumIntervals([[1, 5], [6, 10]])); // 8
console.log(sumIntervals([[1, 4], [7, 10], [3, 5]])); // 7
console.log(sumIntervals([[1, 4], [2,3], [7, 10], [3, 5]])); // 7
console.log(sumIntervals([[1, 2], [2, 3]])); // 2
console.log(sumIntervals([[0, 20],[-100000000, 10],[30, 40]])) // 100000030
console.log(sumIntervals([[1,5],[1,5]])) // 4
console.log(
	sumIntervals([
		[-12, 0],
		[1, 5],
		[5, 11],
		[-12, 29],
	])
);
