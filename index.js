// selector
const projectsArea = document.querySelector(".project-list-area");


function getProjectImg(project) {
  const imgParent = document.createElement("div");
  imgParent.className = "project-img-cont";

  const imgElm = document.createElement("img");
  imgElm.src = project.image;
  imgElm.setAttribute("alt", project.name);

  imgParent.appendChild(imgElm);

  return imgParent;
}

function createAnchorElm(href, value, className, attrName, attrValue) {
  const anchorElm = document.createElement("a");
  anchorElm.innerText = value
	anchorElm.href = href;
  anchorElm.className = className;
  anchorElm.setAttribute(attrName, attrValue);

  return anchorElm;
}

function getProjectLinks(project) {
  const linkContainer = document.createElement("div");
  linkContainer.className = "links";

  const websiteLink = createAnchorElm(project.url, 'Live',"btn", "target", "_blank");

  const githubLink = createAnchorElm(project.github,'github', "btn", "target", "_blank");

  linkContainer.append(websiteLink, githubLink);
  return linkContainer;
}

function getRandomColor() {
  // Array of most used colors in hex format
  const colors = [
    "#FF5733",
    "#FFC300",
    "#4CAF50",
    "#3498DB",
    "#9B59B6",
    "#E74C3C",
    "#9b2226",
		"#6a040f",
    "#F39C12",
    "#fb8500",
    "#2ECC71",
    "#2980B9",
    "#8E44AD",
    "#5B6D92",
    "#800080",
    "#E9967A",
    "#4682B4",
    "#0F1035",
    "#163020",
    "#264653",
    "#4a5759",,
  ];
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex]
}

function getProjectTags(project) {
  const tagsContainer = document.createElement("div");
	tagsContainer.className = 'tags'
  if (!project?.tags.length) {
    return null;
  }

  project.tags.forEach((tag) => {
    const tagItem = document.createElement("span");
    tagItem.innerText = tag;
		tagItem.className = "tags-item";
    tagItem.style.color = getRandomColor();
    tagsContainer.appendChild(tagItem);
  });

  return tagsContainer;
}

function getProjectContent(project) {
  const contentContainer = document.createElement("div");
  contentContainer.className = "project-detail";
  const contentElm = document.createElement("div");
  contentElm.className = "project-content";

  const projectName = document.createElement("h2");
  projectName.innerText = project.name;

  const projectTags = getProjectTags(project);

  const projectDescription = document.createElement("p");
  projectDescription.innerText = project.description;

  contentElm.append(projectName, projectTags, projectDescription);

  contentContainer.appendChild(contentElm);

  return contentContainer;
}

function renderProjectList(projects) {
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    const projectImg = getProjectImg(project);
    const projectContent = getProjectContent(project);
    const projectLinks = getProjectLinks(project);

    projectCard.append(projectImg, projectContent, projectLinks);

    projectsArea.appendChild(projectCard);
  });
}

function fetchProjects() {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((projects) => {
      renderProjectList(projects);
    })
    .catch((err) => {
      console.log(err);
    });
}


fetchProjects();

