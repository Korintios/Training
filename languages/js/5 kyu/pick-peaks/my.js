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