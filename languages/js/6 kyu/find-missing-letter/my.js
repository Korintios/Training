function findMissingLetter(array) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let initLetter = array[0] !== "a" ? letters.indexOf(array[0]) : 0
  
  for (var i=0;i<array.length;i++) {
    if (array[i] !== letters[initLetter+i]) {
      return letters[initLetter+i]
    }
  }
}