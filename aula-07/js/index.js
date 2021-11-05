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
  const tr = getLineElement(event)
  studentEditIndex = tr.rowIndex

  sourceIds.forEach((id, index) => {
    const input = document.getElementById(id)
    input.value = tr.children[index].innerHTML
  })
}

const deleteBtnEvent = event => {
  const tr = getLineElement(event)
  const tbody = tr.parentNode
  tbody.removeChild(tr)
}

const getLineElement = event => event.target.parentNode.parentNode

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
  
  tr.appendChild(createTdWithInput('Editar', editBtnEvent))
  tr.appendChild(createTdWithInput('Remover', deleteBtnEvent))

  tbody.appendChild(tr)
}

const createTdWithInput = (inputValue, onclickEvent) => {
  const td = document.createElement('td')
  const input = createInputButton(inputValue, onclickEvent)
  td.appendChild(input)
  return td
}

const createInputButton = (inputValue, onclickEvent) => {
  const inputEdit = document.createElement('input')
  inputEdit.value = inputValue
  inputEdit.type = 'button'
  inputEdit.onclick = onclickEvent
  return inputEdit
}

start()