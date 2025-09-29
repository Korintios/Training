function topThreeWords(text) {
    // Organizamos y filtramos las palabras encontradas.
    const filteredWords = text.split(" ").filter((i) => /[aA-zZ]/.test(i))

    // Creamos un diccionario en base a las palabras encontradas
    const structureWords = filteredWords.reduce((acc = {}, word) => {
        acc[word.toLowerCase()] = (acc[word.toLowerCase()] || 0) + 1
            return acc
    }, {})

    // Transformamos el diccionario de palabras en un array para ordenarlo y devolverlo nuevamente como un diccionario organizado con las 3 palabras mas usadas.
    const arrayWords = Object.fromEntries(Object.entries(structureWords).sort((a,b) => b[1] - a[1]).splice(0,3))
    return Object.keys(arrayWords).map((word) => word.match(/([A-Za-z']+)$/)[0])
}