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

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))