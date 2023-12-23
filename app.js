import { projectList } from "./data.js";

// selector
const projectsArea = document.querySelector(".project-list-area");

function loadProjectsOnScreen() {
  projectList.forEach((project) => {
    const tagsElm = project.tags
      ?.map((tag) => {
        return `<span class="${
          tag?.toLowerCase() || "general-tag"
        }"> ${tag} </span>`;
      })
      .join("");
	projectsArea.innerHTML += `
				<div class="project-card"> 
					<div class="project-img-cont"> 
						<img src="${project.image}" alt="${project.name}-project" />
					</div>
					<div class="project-detail"> 
						<div class="project-content">
							<h2> ${project.name} </h2>
							<div class="tags">
								${tagsElm}
							</div>
							<p> ${project.description} </p>
						</div>
					</div>
					<div class="links">
						<a target="_blank" href="${project.url}">Live</a>
						<a target="_blank" href="${project.github}">Github</a>
					</div>
				</div>
		`;
  });
}

loadProjectsOnScreen();
