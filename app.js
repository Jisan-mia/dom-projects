// import { projectList } from './data.js';

console.log(projectList)

// selector
const projectsArea = document.querySelector('.project-list-area')

function loadProjectsOnScreen()  {
    projectList.forEach(project => {
        projectsArea.innerHTML += 
            `
                <div class="project-card"> 
                   <div class="project-detail"> 
                        <div class="project-img-cont"> 
                            <img src=${project.image} alt=${project.name} />
                        </div>
                        <div class="project-content">
                            <h2> ${project.name} </h2>
                            <p> ${project.description} </p>
                        </div>
                   </div>
                </div>
            `
    })
}       

loadProjectsOnScreen();