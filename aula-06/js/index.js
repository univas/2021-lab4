const start = () => {
  const button = document.getElementById('saveBtn')
  button.onclick = saveButtonEvent
}

const saveButtonEvent = () => {
  const inputName = document.getElementById('name')
  addNewGuest(inputName.value)
  addNewParagraph(inputName.value)
}

const addNewGuest = guestName => {
  const li = document.createElement('li')
  const content = document.createTextNode(guestName)
  li.appendChild(content)

  const removeBtn = document.createElement('input')
  removeBtn.value = 'Remover'
  removeBtn.type = 'button'
  removeBtn.onclick = removeLi
  li.appendChild(removeBtn)
  
  const ul = document.getElementById('guest')
  ul.appendChild(li)
}

const addNewParagraph = paragraphContent => {
  const paragraph = document.createElement('p')
  const content = document.createTextNode(paragraphContent)
  paragraph.appendChild(content)

  const div = document.getElementById('myDiv')
  const internDiv = div.children[0]
  internDiv.appendChild(paragraph)
}

const removeLi = event => {
  const btn = event.target
  const li = btn.parentNode
  console.log(li)
  const ul = li.parentNode
  ul.removeChild(li)
  
}


const divs = document.getElementsByClassName('xpto')


start()
