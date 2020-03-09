let n = 24700
let y = 3
let p = 0.12

let m = (n * p * (Math.pow(1 + p, y)))/(12 * ((Math.pow(1 + p, y)) - 1))
let s = (m * 12) * y

  console.log(m)
  console.log(s)


