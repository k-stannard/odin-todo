import { Todo } from "./Todo"

export class ProjectCollection {
    constructor() {
        this.projects = []
    }

    addProject(project) {
        this.projects.push(project)
    }

    removeProject(index) {
        this.projects.splice(index, 1)
    }

    displayProjects() {
        this.projects.forEach(project => {
            console.log(project)
        })
    }
}

export class Project {
    constructor(title) {
        this.title = title
        this.todos = []
    }

    addTodo(title, description, dueDate, priority) {
        const newTodo = new Todo(title, description, dueDate, priority)
        this.todos.push(newTodo)
    }

    removeTodo(index) {
        this.todos.splice(index, 1)
    }

    updateTodo(index, title, description, dueDate, priority) {
        this.todos[index] = new Todo(title, description, dueDate, priority)
    }

    displayTodos() {
        this.todos.forEach(todo => {
            console.log(todo)
        });
    }

    printTitle() {
        console.log(this.title)
    }
}