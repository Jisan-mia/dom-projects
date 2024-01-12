const filterBtns = document.querySelectorAll(".filter-btn-div .btn");
const component = document.querySelectorAll(".component");

/*
// This is the first and small solution
filterBtns.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		const filter = e.target.dataset.filter;
		console.log(filter)
		
		component.forEach((item) => {
			if(filter == 'all'){
				item.style.display = 'block';
			} else{
				if(item.classList.contains(filter)){
					item.style.display = 'block';
				}
				else{
					item.style.display = 'none';
				}
			}
		})

	})
})
*/

// this is the second  solution

function displayFilteredItem(className) {
  component.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

filterBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;

    if (filter == "all") {
      component.forEach((item) => {
        item.style.display = "block";
      });
    } else if (filter == "cpu") {
      displayFilteredItem("cpu");
    } else if (filter == "memory") {
      displayFilteredItem("memory");
    } else if (filter == "os") {
      displayFilteredItem("os");
    } else if (filter == "input-device") {
      displayFilteredItem("input-device");
    } else if (filter == "ouput-device") {
      displayFilteredItem("ouput-device");
    } else if (filter == "software") {
      displayFilteredItem("software");
    } else if (filter == "mobo") {
      displayFilteredItem("mobo");
    } else if (filter == "others") {
      displayFilteredItem("others");
    }
  });
});

//add active class to the current button

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//search box filter

const searchBox = document.getElementById("search-item");

searchBox.addEventListener("keyup", (e) => {
  const searchFilter = e.target.value.toUpperCase().trim();

  component.forEach((item) => {
    if (item.textContent.includes(searchFilter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
