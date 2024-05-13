import { Project } from "./Project";

export class ProjectCollection {
    constructor() {
        this.projects = []
    }

    addProject(project) {
        this.projects.push(project)
    }

    removeProject(index) {
        if(index >= 0 && index < this.projects.length) {
            this.projects.splice(index, 1)
        }  
    }

    displayProjects() {
        this.projects.forEach(project => {
            console.log(project)
        })
    }
}