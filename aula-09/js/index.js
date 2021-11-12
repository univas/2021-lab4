const sourceIds = ['name', 'email', 'phone']
let studentEditIndex = null
let students = []

const start = () => {
  loadDataFromLocalStorage()

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
  const user = {}

  sourceIds.forEach(id => {
    const input = document.getElementById(id)
    user[id] = input.value
    const td = document.createElement('td')
    const contentTd = document.createTextNode(input.value)
    td.appendChild(contentTd)
    tr.appendChild(td)
  })

  tr.appendChild(createTdWithInput('Editar', editBtnEvent))
  tr.appendChild(createTdWithInput('Remover', deleteBtnEvent))
  tbody.appendChild(tr)

  students.push(user)
  localStorage.setItem('xuxa', JSON.stringify(students))
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

const loadDataFromLocalStorage = () => {
  const savedStudents = localStorage.getItem('xuxa')
  if (savedStudents) {
    students = JSON.parse(savedStudents)
    populateTable()
  }
}

const populateTable = () => {
  const table = document.getElementById('myTable')
  const tbody = table.tBodies[0]
  tbody.innerHTML = ''
  
  students.forEach(user => {
    const tr = document.createElement('tr')
    sourceIds.forEach(id => {
      const td = document.createElement('td')
      const contentTd = document.createTextNode(user[id])
      td.appendChild(contentTd)
      tr.appendChild(td)
    })

    tr.appendChild(createTdWithInput('Editar', editBtnEvent))
    tr.appendChild(createTdWithInput('Remover', deleteBtnEvent))
    tbody.appendChild(tr)
  })
}

start()