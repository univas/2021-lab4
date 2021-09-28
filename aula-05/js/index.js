let counter = 0

function start() {
  let input = document.getElementById('myButton')
  input.onclick = function() {
    counter++
    input.value = `Click ${counter}`
  }
}

start()
