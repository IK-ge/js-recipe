//引数numberを受け取る関数
const genkiFunction = function (number) {
  //nを1から、numberまで、値を1ずつ増やしながら、forの{}の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

genkiFunction(100)
