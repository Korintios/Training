function createPhoneNumber(numbers){
  var firstNumbers = numbers.slice(0,3).join("")
  var midNumbers = numbers.slice(3,6).join("")
  var endNumbers = numbers.slice(6,11).join("")
  
  return `(${firstNumbers}) ${midNumbers}-${endNumbers}`
}