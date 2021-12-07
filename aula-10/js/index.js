const serverUrl = 'https://news-api-node.herokuapp.com/api/v1/news/ea30897c-67fe-4f79-896a-369366a914bb'

const start = () => {
    loadDataFromServer()

    $('#saveButton').click(saveNewPost)
}

const loadDataFromServer = () => {
    $.get(serverUrl, data => {
        populateList(data)
        setOnclikButtons()
    })
}

const populateList = data => {
    $('#messageList').empty()

    data.forEach(item => {
        $('#messageList').append(`
            <li>
                ${item.post}
                <input type="button" value="Remover" class="deleteButton"
                    name="${item.id}">
            </li>
        `)
    })
}

const saveNewPost = () => {
    const message = {
        post: $('#message').val()
    }

    $.post(serverUrl, message)
        .done(() => {
            $('#message').val('')
            loadDataFromServer()
        })
}

const setOnclikButtons = () => {
    $('.deleteButton').click(deletePost)
}

const deletePost = event => {
    const deleteButton = event.target
    $.ajax({
        url: serverUrl + '/' + deleteButton.name,
        type: 'DELETE',
        success: successDelete,
        error: errorDeletePost,
    })
}

const successDelete = () => {
    alert('Post apagado com sucesso!')
    loadDataFromServer()
}

const errorDeletePost = () => {
    alert('Não foi possível apagar o Post!')
}

start()