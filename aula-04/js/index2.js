function printName() {
  console.log('estou dentro da função')  
}

function sum(a, b) {
  return a + b
}

printName()

let result = sum(10, 5)
console.log(result)

for (let i = 0; i < 10; i++) {
  console.log('Estou dentro do FOR: ' + i)
}

printA()

function printA() {
  let a = null
  console.log(a)
  if (a) {
    var studentName = 'Rodrigo'
  }

  console.log(studentName)
  //printB()
}

function printB() {
  console.log(studentName)
}
