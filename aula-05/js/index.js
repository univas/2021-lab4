let counter = 0

function start() {
  let input = document.getElementById('myButton')
  input.onclick = function() {
    counter++
    input.value = `Click ${counter}`
    
    let inputName = document.getElementById('studentName')
    alert(inputName.value)
    //inputName.value = ''

    let div = document.getElementById('myDiv')
    div.style.backgroundColor = inputName.value
  }
}

start()
