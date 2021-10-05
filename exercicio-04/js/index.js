function start() {
  document.getElementById('calcButton').onclick = calcButtonEvent
}

function calcButtonEvent() {
  let numberA = document.getElementById('numberA').value
  numberA = parseInt(numberA, 10)
  let numberB = document.getElementById('numberB').value
  numberB = parseInt(numberB, 10)

  const operator = document.getElementById('operator').value
  if (operator === '+') {
    console.log(numberA + numberB)
  } else if (operator === '-') {
    console.log(numberA - numberB)
  } else if (operator === '/') {
    console.log(numberA / numberB)
  } else if (operator === '*') {
    console.log(numberA * numberB)
  }
}

start()