import { Project } from "./Project"

const tasks = new Project()
tasks.addTodo('Create website', 'write up the code for the site', 'may 1 2024', 'very high')
tasks.addTodo('clean room', 'vacuum and throw away unused clothes', 'june 1 2024', 'medium')

tasks.displayTodos()
