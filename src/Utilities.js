export function createProjectForm() {
    const form = document.createElement('form')
    form.setAttribute('style', 'display:flex;flex-direction:column;width:200px;gap:10px;')

    const title = createInput("Project Title")
    const task = createInput("Task")
    const description = createInput("Description")
    const dueDate = createInput("Due Date")
    const priority = createInput("Priority")

    form.appendChild(title)
    form.appendChild(task)
    form.appendChild(description)
    form.appendChild(dueDate)
    form.appendChild(priority)

    const submit = document.createElement('button')
    submit.setAttribute('type', 'button')
    submit.setAttribute('style', 'height:30px')
    submit.textContent = "Submit"

    form.appendChild(submit)

    document.body.appendChild(form)
}

function createInput(id) {
    const inputContainer = document.createElement('div')
    inputContainer.setAttribute('style', 'display:flex;flex-direction:column')

    const label = document.createElement('label')
    label.setAttribute('for', 'title')
    label.textContent = id

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', id)

    inputContainer.appendChild(label)
    inputContainer.appendChild(input)

    return inputContainer
}