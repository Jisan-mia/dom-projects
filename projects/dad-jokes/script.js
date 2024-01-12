const jokesDiv = document.querySelector(".jokesDiv");
const generatorBtn = document.querySelector(".jokesGeneratorBtn");

const url = "https://icanhazdadjoke.com/";
let timer_on = 10000;
let interval;

function startInterval(){
  interval = setInterval(generateJokes, timer_on);
}

async function generateJokes() {
  generatorBtn.setAttribute("disabled", "disabled");

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    const joke = await response.json();

    jokesDiv.innerHTML = joke.joke;
  } catch {
    jokesDiv.innerHTML = "Error getting jokes";
  } finally {
    generatorBtn.removeAttribute("disabled");
  }
}

generateJokes();
startInterval()



generatorBtn.addEventListener("click", function () {
  generateJokes();
  clearInterval(interval)
  startInterval()

});
