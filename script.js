let numberOne = prompt (`Digite o primeiro número`)
let numberTwo = prompt (`Digite o segundo número`)

numberOne = Number(numberOne)
numberTwo= Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let div = numberOne / numberTwo
let multi = numberOne * numberTwo
let sobra = numberOne % numberTwo

alert (`A soma dos dois numero é ${sum}`)
alert (`A subtração dos dois numero é ${sub}`)
alert (`A divisão dos dois numero é ${div}`)
alert (`A multiplicação dos dois numero é ${multi}`)
alert (`O resto da divisão dos dois numero é ${sobra}`)

let evenOrOdd = sum
let total = evenOrOdd / 2
if (evenOrOdd % 2) {
  alert(`A soma resultou em um número impar: ${sum}` );
}

else {
  alert(`A soma resultou em um número par: ${sum}`);
}

let sameNumber = numberOne == numberTwo

if (sameNumber) {
  alert(`Os números são iguais`)
}

else {
  alert(`Os números são diferentes`)
}


  
