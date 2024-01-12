const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
// const phone = document.getElementById('phone');
const password = document.getElementById("password");
const cpassword = document.getElementById("retypepass");

//add event
form.addEventListener("submit", (event) => {
  console.log("form submit");
  event.preventDefault();

  validate();
});

//is email(check the email)
const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;

  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 3) return false;

  if (dot === emailVal.length - 1) return false;

  return true;
};

const validate = () => {
  const userNameVal = username.value.trim();
  const emailVal = email.value.trim();
  // const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // validate userName
  if (userNameVal === "") {
    setErrorMsg(username, "Username cannot be blank");
  } else if (userNameVal.length <= 2) {
    setErrorMsg(username, "Enter min 3 char");
  } else {
    setSuccessmsg(username);
  }

  // validate email
  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not valid email");
  } else {
    setSuccessmsg(email);
  }

  //validate phone
  /*if(phoneVal === ""){
		setErrorMsg(phone, 'phone num cannot be blank');
	} else if (phoneVal.length != 11 ) {
		setErrorMsg(phone, 'not valid phone num');
	} else{
		setSuccessmsg(phone);
	}*/

  //validate password
  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank");
  } else if (passwordVal.length < 8) {
    setErrorMsg(password, "Enter min 8 char");
  } else {
    setSuccessmsg(password);
  }

  //validate confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Field cannot be blank");
  } else if (cpasswordVal.length < 8) {
    setErrorMsg(cpassword, "Enter min 8 char");
  } else if (cpasswordVal != passwordVal) {
    setErrorMsg(cpassword, "Password didn't matched ");
  } else {
    setSuccessmsg(cpassword);
  }

  setTimeout(() => {
    let successCls = document.querySelectorAll(".success");
    if (successCls.length == 4) {
      showSubmittedMsg();
    }
  }, 1000);
};

function showSubmittedMsg() {
  let mainPage = document.getElementById("main-page");
  mainPage.style.display = "none";
  let successMsgPage = document.getElementById("submitted-msg");
  successMsgPage.style.display = "block";

  document.getElementById("msg-name").innerText = userName.value;
}

function setErrorMsg(input, errormsg) {
  const formGroup = input.parentNode;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group error";
  small.innerText = errormsg;
}

function setSuccessmsg(input) {
  const fromGroup = input.parentNode;
  fromGroup.className = "form-group success";
}

function previewForm() {
  document.getElementById("main-page").style.display = "block";
  document.getElementById("submitted-msg").style.display = "none";

  let submitBtn = document.getElementById("submit-btn");
  submitBtn.classList.remove("btn");
  submitBtn.classList.add("disabled-btn");
  submitBtn.disabled = true;
}
