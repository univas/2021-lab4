const start = () => {
  const btn = document.getElementById('saveBtn')
  btn.onclick = saveBtnEvent
}

const saveBtnEvent = event => {
  const inputName = document.getElementById('name')
  const inputEmail = document.getElementById('email')
  const inputPhone = document.getElementById('phone')

  const table = document.getElementById('myTable')
  const tbody = table.tBodies[0]
  const tr = document.createElement('tr')
  const tdName = document.createElement('td')
  const tdEmail = document.createElement('td')
  const tdPhone = document.createElement('td')
  const tdEdit = document.createElement('td')
  const tdDelete = document.createElement('td')
  const contentTdName = document.createTextNode(inputName.value)
  const contentTdEmail = document.createTextNode(inputEmail.value)
  const contentTdPhone = document.createTextNode(inputPhone.value)
  const inputEdit = document.createElement('input')
  inputEdit.value = 'Editar'
  inputEdit.type = 'button'
  inputEdit.onclick = editBtnEvent
  const inputDelete = document.createElement('input')  
  inputDelete.value = 'Remover'
  inputDelete.type = 'button'
  inputDelete.onclick = deleteBtnEvent

  tdName.appendChild(contentTdName)
  tdEmail.appendChild(contentTdEmail)
  tdPhone.appendChild(contentTdPhone)
  tdEdit.appendChild(inputEdit)
  tdDelete.appendChild(inputDelete)

  tr.appendChild(tdName)
  tr.appendChild(tdEmail)
  tr.appendChild(tdPhone)
  tr.appendChild(tdEdit)
  tr.appendChild(tdDelete)

  tbody.appendChild(tr)
  event.preventDefault()
}

const editBtnEvent = event => {
  alert('ola edição')
}

const deleteBtnEvent = event => {
  const input = event.target
  const td = input.parentNode
  const tr = td.parentNode
  const tbody = tr.parentNode
  tbody.removeChild(tr)
}

start()