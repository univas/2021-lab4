let counter = 0
const defaultFontSize = 32

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

  const increaseButton = document.getElementById('increaseFont')
  increaseButton.onclick = increaseFontSize

  const decreaseButton = document.getElementById('decreaseFont')
  decreaseButton.onclick = decreaseFontSize
}

function increaseFontSize() {
  const title = document.getElementById('title')
  let newFontSize = defaultFontSize

  if (title.style.fontSize) {
    newFontSize = title.style.fontSize.replace('px', '')
    newFontSize = parseInt(newFontSize, 10)    
  }

  newFontSize++
  title.style.fontSize = newFontSize + 'px'
}

function decreaseFontSize() {
  const title = document.getElementById('title')
  let newFontSize = defaultFontSize

  if (title.style.fontSize) {
    newFontSize = title.style.fontSize.replace('px', '')
    newFontSize = parseInt(newFontSize, 10) 
  }

  newFontSize--
  title.style.fontSize = newFontSize + 'px'
}

start()
