const url = "https://randomuser.me/api/";
function apiFetch() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showDataOnUi(data);
    });
}

function showDataOnUi(data) {
  const userName = `${
    data.results[0].name.first + " " + data.results[0].name.last
  }`;

  const userEmail = `${data.results[0].email}`;

  const userPhone = `${data.results[0].phone}`;

  const location = `${
    data.results[0].location.city + ", " + data.results[0].location.country
  }`;

  const image = `<img src="${data.results[0].picture.large}" alt=""/>`;

  document.getElementById("user-name").innerText = userName;
  document.getElementById("user-email").innerText = userEmail;
  document.getElementById("user-phone").innerText = userPhone;
  document.getElementById("user-address").innerText = location;
  document.getElementById("user-image").innerHTML = image;

  document.getElementById("");
}

function displayCurrentInfo(id1, id2, id3, id4) {
  document.getElementById(id1).style.display = "block";
  document.getElementById(id2).style.display = "none";
  document.getElementById(id3).style.display = "none";
  document.getElementById(id4).style.display = "none";
  document.getElementById(id4).style.display = "none";
}

function showUserName() {
  displayCurrentInfo(
    "user-name-div",
    "user-email-div",
    "user-phone-div",
    "user-address-div"
  );
}
function showUserEmail() {
  displayCurrentInfo(
    "user-email-div",
    "user-phone-div",
    "user-address-div",
    "user-name-div"
  );
}
function showUserPhone() {
  displayCurrentInfo(
    "user-phone-div",
    "user-email-div",
    "user-address-div",
    "user-name-div"
  );
}
function showUserLocation() {
  displayCurrentInfo(
    "user-address-div",
    "user-phone-div",
    "user-email-div",
    "user-name-div"
  );
}

setTimeout(() => {
  document.getElementById("watermark").style.display = "none";
}, 2500);

apiFetch();

function genrateNewUser() {
  apiFetch();
}
