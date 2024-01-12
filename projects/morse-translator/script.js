const textAreaInput = document.querySelector("#textAreaInput");
const morseAreaInput = document.querySelector("#morseAreaInput");
const textClipboard = document.querySelector("#textClipboard");
const morseClipboard = document.querySelector("#morseClipboard");
const morseMainChart = document.getElementById("morseMainChart");
const accordions = document.querySelectorAll(".accordion-label");
// morse code key vales
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

// MORSE_CODE obj keys to values and values to keys odolbodl
const odolBodolFunc = (keys, values) => {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[values[i]] = keys[i];
  }
  return obj;
};
const morseKeys = Object.keys(MORSE_CODE);
const morseValues = Object.values(MORSE_CODE);
const odolBodolMorse = odolBodolFunc(morseKeys, morseValues);

//individual validations
/*
//text input validate
const checkTextInputValidation = (input) => {
	textAreaInput.value = textAreaInput.value.replace(input, "");
	textAreaInput.style.borderColor = "red";
	setTimeout(() => {
		textAreaInput.style.borderColor = "#3273dc";
	}, 400);
};
//morse code validate
const checkMorseValidation = (input) => {
	morseAreaInput.value = morseAreaInput.value.replace(input, "");
	morseAreaInput.style.borderColor = "red";
	setTimeout(() => {
		morseAreaInput.style.borderColor = "#3273dc";
	}, 400);
};
*/

//check validation for both textInputArea and MorseInputArea
const checkInputValidation = (input, inputArea) => {
  inputArea.value = inputArea.value.replace(input, "");

  if (inputArea.value == morseAreaInput.value) {
    if (input === "") {
      // console.log("it's space");
    } else {
      inputArea.style.borderColor = "red";
      setTimeout(() => {
        inputArea.style.borderColor = "#3273dc";
      }, 400);
    }
  } else {
    inputArea.style.borderColor = "red";
    setTimeout(() => {
      inputArea.style.borderColor = "#3273dc";
    }, 400);
  }
};

//show output on screen function
const showOutput = (input, areaInput, tTMMTT) => {
  if (input) {
    areaInput.value = tTMMTT;
  } else {
    areaInput.value = "";
  }
};

// translator for both textToMorse and MorseToText
// tTMMTT = textToMorseOrMorseToText
const textToMorseOrMorseToText = (letters, morseCode, inputArea) => {
  let tTMMTT = [];

  for (let x = 0; x < letters.length; x++) {
    tTMMTT[x] = [];
    for (let y = 0; y < letters[x].length; y++) {
      if (morseCode[letters[x][y]]) {
        tTMMTT[x].push(morseCode[letters[x][y]]);
      } else {
        checkInputValidation(letters[x][y], inputArea);
      }
    }
  }
  return tTMMTT;
};

// text to morse code
const onTextInput = (e) => {
  // JISAN MIA
  const textInput = e.value.toUpperCase();
  const word = textInput.split(" ");
  const letters = word.map((char) => char.split(""));

  /*
	let morse = [];
	for (let x = 0; x < letters.length; x++) {
		morse[x] = [];
		for (let y = 0; y < letters[x].length; y++) {
			if (odolBodolMorse[letters[x][y]]) {
				morse[x].push(odolBodolMorse[letters[x][y]]);
			} else {
				checkInputValidation(letters[x][y], textAreaInput);
			}
		}
	}
*/
  const textToMorse = textToMorseOrMorseToText(
    letters,
    odolBodolMorse,
    textAreaInput
  );
  const textToMorseMain = textToMorse.map((word) => word.join(" ")).join("   ");
  showOutput(textInput, morseAreaInput, textToMorseMain);
};

// morse code to text
const onMorseInput = (e) => {
  // .--- .. ... .- -.   -- .. .-
  /*
	# Another solution
	const morseToTextV2 = morseInput
		.split("   ")
		.map((word) =>
			word
				.split(" ")
				.map((char) => MORSE_CODE[char])
				.join("")
		)
		.join(" ")
		.trim();
*/

  const morseInput = e.value;
  const word = morseInput.split("   ");
  const letters = word.map((char) => char.split(" "));

  /*
	let morseToText2 = [];
	for (let x = 0; x < letters.length; x++) {
		morseToText[x] = [];
		for (let y = 0; y < letters[x].length; y++) {
			if (MORSE_CODE[letters[x][y]]) {
				morseToText[x].push(MORSE_CODE[letters[x][y]]);
			} else {
				checkInputValidation(letters[x][y], morseAreaInput);
			}
		}
	}
	*/

  const morseToText = textToMorseOrMorseToText(
    letters,
    MORSE_CODE,
    morseAreaInput
  );

  const morseToTextMain = morseToText.map((word) => word.join("")).join(" ");

  showOutput(morseInput, textAreaInput, morseToTextMain);
};

// copy clipboard
textClipboard.addEventListener("click", function () {
  copyClipboard(textAreaInput);
});
morseClipboard.addEventListener("click", function () {
  copyClipboard(morseAreaInput);
});

//function for copying clipboard for both morseinput and textinput
function copyClipboard(areaInput) {
  if (textAreaInput.value || morseAreaInput.value) {
    areaInput.select();
    areaInput.setSelectionRange(0, 99999);

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + areaInput.value);
  } else {
    alert("Type something to copy");
  }
}

// show morse code of English alphabet and numbers in the ui
Object.entries(MORSE_CODE).forEach(([key, value]) => {
  const colros = [
    "#FAFAFA",
    "#fcfcfc",
    "#f7f5f6",
    "#e3e4e5",
    "#d9dfe0",
    "#fdfff5",
    "#e5e9e1",
    "#dde4e3",
    "#d2d2df", //8
    "#d6d7d2",
    "#dee1e9",
    "#dcdcdc",
    "#fafafa", //12
    "#dae4ee",
    "#e5edf1",
    "#e2e3eb", //15
    "#f7f7f7",
    "#f4f5f0",
    "#eff3f0",
    "#f8f8ff",
  ];

  const randomInd = Math.floor(Math.random() * colros.length + 1);
  const randomCol = colros[randomInd];

  morseMainChart.innerHTML += `<div style="background-color: ${randomCol}" class="chart-item">
							 		<strong> ${value}</strong> 
									<strong class="symbol"> ${key} </strong> 	
								<div>`;
});

// accordion
Array.from(accordions).forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // toggle accordions + and -
    this.classList.toggle("is-open");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      //content is open, need to close
      content.style.maxHeight = null;
    } else {
      // content is close, need to open
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
