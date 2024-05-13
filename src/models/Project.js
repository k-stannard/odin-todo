import { Todo } from "./Todo"

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
        if(index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1)
        }
    }

    updateTodo(index, title, description, dueDate, priority) {
        if(index >= 0 && index < this.todos.length) {
            this.todos[index].title = title
            this.todos[index].description = description
            this.todos[index].dueDate = dueDate
            this.todos[index].priority = priority
        }
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