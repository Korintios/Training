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

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))