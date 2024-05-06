import { Todo } from "./Todo"

export class Project {
    constructor() {
        this.todos = []
    }

    addTodo(title, description, dueDate, priority) {
        const newTodo = new Todo(title, description, dueDate, priority)
        this.todos.push(newTodo)
    }

    displayTodos() {
        this.todos.forEach(todo => {
            console.log(todo)
        });
    }
}