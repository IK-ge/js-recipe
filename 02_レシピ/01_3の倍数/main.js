//引数numberを受け取る関数
const genkiFunction = function (number) {
  //nを1から、numberまで、値を1ずつ増やしながら、forの{}の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}

genkiFunction(100)
