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