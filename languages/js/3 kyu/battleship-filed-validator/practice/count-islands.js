let mapa = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [1, 1, 0, 0, 0]
];

function contarIslas(mapa) {

    // Array de islas visitadas.
    let visited = Array(5).fill(null).map(() => Array(5).fill(false));
    let saveIslands = 0

    // Array de direcciones para viajar alrededor del campo actual.
    const direcciones = [
        [-1, 0],  // arriba
        [1, 0],   // abajo
        [0, -1],  // izquierda
        [0, 1]    // derecha
    ];

    // Funcion para validar que las coordenadas no sean undefined.
    function isValidCoord (x,y) {
        return x >= 0 && x < mapa.length && y >= 0 && y < mapa[0].length;
    }

    function exploreIsland(x,y) {
        visited[x][y] = true;

        for (let k = 0; k < direcciones.length; k++) {
            let newRow = x + direcciones[k][0];
            let newCol = y + direcciones[k][1];

            if (isValidCoord(newRow, newCol) && mapa[newRow][newCol] === 1 && !visited[newRow][newCol]) {
                exploreIsland(newRow,newCol)
            }
        }
    }

    // Recorremos las filas del mapa mediante un array anidado.
    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {
            // Si estamos explorando la isla la marcamos como true en el array de visitados y procedemos a explorarla.
            if (mapa[i][j] === 1 && !visited[i][j]) {
                saveIslands++
                exploreIsland(i,j)
            }
        }
    }

    // Retorna un número
    return saveIslands
}

console.log(contarIslas(mapa)); // Debería ser 4