const start = () => {
  const button = document.getElementById('saveBtn')
  button.onclick = saveButtonEvent
}

const saveButtonEvent = () => {
  const inputName = document.getElementById('name')
  addNewGuest(inputName.value)
}

const addNewGuest = guestName => {
  const li = document.createElement('li')
  const content = document.createTextNode(guestName)
  li.appendChild(content)

  const ul = document.getElementById('guest')
  ul.appendChild(li)
}

start()
