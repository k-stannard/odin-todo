import { ProjectCollection } from "./models/ProjectCollection"
import { Project } from "./models/Project"

const projects = new ProjectCollection()

const tasks = new Project("chores")
tasks.addTodo('Create website', 'write up the code for the site', 'may 1 2024', 'very high')
tasks.addTodo('clean room', 'vacuum and throw away unused clothes', 'june 1 2024', 'medium')

const task2 = new Project("project a")
task2.addTodo('a','a','a','low')

const task3 = new Project("project b")
task3.addTodo('b','b','b','very high')

projects.addProject(tasks)
projects.addProject(task2)
projects.addProject(task3)

document.addEventListener("DOMContentLoaded", () => {

    projects.displayProjects()
    tasks.displayTodos()

    tasks.removeTodo(0)
    projects.removeProject(1)
    console.log("---------- removed ----------")

    projects.displayProjects()
    tasks.displayTodos()


    tasks.updateTodo(0, "finish class methods", "complete the todo class CRUD methods", "1 hour", "high")
    console.log("-------- updating todo ----------")

    tasks.displayTodos()
})