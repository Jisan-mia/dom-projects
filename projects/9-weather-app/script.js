const searchInput = document.getElementById("searchInput");

document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  searchValue = searchInput.value.trim();

  if (searchValue == "") {
    alert("Please enter your city name");
  } else {
    fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=30c57aaa31356639f82849e3808f9f81 `
    )
      .then((res) => res.json())
      .then((data) => {
        showDataOnUi(data);
        searchInput.value = "";
      });
  }
});

function showDataOnUi(data) {
  console.log(data);
  if (data.cod == 404) {
    alert("404, City not found");
  } else {
    const temperature = data.main.temp;
    const location = data.name;
    const weatherSitation = data.weather[0].main;
    const icon = data.weather[0].icon;
    const html = `
    <div class="result-div-inner">
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="" /> 
    </div>
    <div class="result-div-inner">
        <h2> ${location} </h2>
    </div>
    <div class="result-div-inner">
        <h3> ${temperature} <sup>o</sup> C </h3>
    </div>
    <div class="result-div-inner">
        <h4> ${weatherSitation} </h4>
    </div>
    </div>
    `;

    document.getElementById("result-div").innerHTML = html;
  }
}
