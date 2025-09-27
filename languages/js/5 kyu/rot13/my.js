const cipher = {
  a: "n", b: "o", c: "p", d: "q", e: "r", f: "s", g: "t", h: "u", i: "v", j: "w", k: "x", l: "y", m: "z",
  n: "a", o: "b", p: "c", q: "d", r: "e", s: "f", t: "g", u: "h", v: "i", w: "j", x: "k", y: "l",
  z: "m"
};

function rot13(message){
    if (!message) return message

    return message.split("").map((letter) => {
        if (!letter.match(/[a-z]/i)) return letter
        let isUppercase = letter === letter.toUpperCase()
        return isUppercase ? cipher[letter.toLowerCase()].toUpperCase() : cipher[letter.toLowerCase()]
    }).join("")
}