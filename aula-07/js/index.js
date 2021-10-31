let studentEditIndex = null
const sourceIds = ['name', 'email', 'phone']

const start = () => {
  const btn = document.getElementById('saveBtn')
  btn.onclick = saveBtnEvent
}

const saveBtnEvent = event => {
  const table = document.getElementById('myTable')
  const tbody = table.tBodies[0]

  if (studentEditIndex === null) {
    createNewRow(tbody)

  } else {
    updateTableRowValues(tbody)
    studentEditIndex = null
  }

  clearFields()
  event.preventDefault()
}

const editBtnEvent = event => {
  const input = event.target
  const td = input.parentNode
  const tr = td.parentNode
  studentEditIndex = tr.rowIndex

  const inputName = document.getElementById('name')
  const inputEmail = document.getElementById('email')
  const inputPhone = document.getElementById('phone')
  inputName.value = tr.children[0].innerHTML
  inputEmail.value = tr.children[1].innerHTML
  inputPhone.value = tr.children[2].innerHTML
}

const deleteBtnEvent = event => {
  const input = event.target
  const td = input.parentNode
  const tr = td.parentNode
  const tbody = tr.parentNode
  tbody.removeChild(tr)
}

const clearFields = () => {
  sourceIds.forEach(id => {
    document.getElementById(id).value = ''
  });
}

const updateTableRowValues = tbody => {
  const tr = tbody.children[studentEditIndex - 1]

  sourceIds.forEach((id, index) => {
    tr.children[index].innerHTML = 
        document.getElementById(id).value  
  })
}

const createNewRow = tbody => {
  const tr = document.createElement('tr')

  sourceIds.forEach(id => {
    const input = document.getElementById(id)
    const td = document.createElement('td')
    const contentTd = document.createTextNode(input.value)
    td.appendChild(contentTd)
    tr.appendChild(td)
  })
  
  const tdEdit = document.createElement('td')
  const tdDelete = document.createElement('td')
  
  const inputEdit = createInputButton('Editar', editBtnEvent)
  const inputDelete = createInputButton('Remover', deleteBtnEvent)

  tdEdit.appendChild(inputEdit)
  tdDelete.appendChild(inputDelete)

  tr.appendChild(tdEdit)
  tr.appendChild(tdDelete)

  tbody.appendChild(tr)
}

const createInputButton = (inputValue, onclickEvent) => {
  const inputEdit = document.createElement('input')
  inputEdit.value = inputValue
  inputEdit.type = 'button'
  inputEdit.onclick = onclickEvent
  return inputEdit
}

start()