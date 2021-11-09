const myKey = 'username'

const start = () => {
  printHello()
  document.getElementById('saveBtn').onclick = saveBtnEvent
}

const saveBtnEvent = () => {
  const inputName = document.getElementById('name')
  localStorage.setItem(myKey, inputName.value)
  sessionStorage.setItem(myKey, inputName.value)
}

const printHello = () => {
  const username = localStorage.getItem(myKey)
  if (username) {
    alert(`[LocalStorage] Seja bem vindo de volta ${username}`)
  }

  const username2 = sessionStorage.getItem(myKey)
  if (username2) {
    alert(`[SessionStorage] Seja bem vindo de volta ${username}`)
  }
}

start()