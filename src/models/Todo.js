export class Todo {

    static PRIORITY = ["low", "medium", "high", "very high"]

    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.setPriority(priority)
    }

    setPriority(priority) {
        if(Todo.PRIORITY.includes(priority)) {
            this.priority = priority
        } else {
            throw new Error(`Invalid priority type. Types are: ${Todo.PRIORITY.join(', ')}`)
        }
    }
}