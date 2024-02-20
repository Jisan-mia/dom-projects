const leftArea = document.getElementById("leftArea")
const rightArea = document.getElementById("rightArea")
const intersectionBtn = document.getElementById("intersectionBtn")
const selector = document.getElementById("selector")
const result = document.getElementById("result")

intersectionBtn.onclick = () => {
    let leftText = leftArea.value;
    let rightText = rightArea.value;

    // Get the selected index
    let selectedIndex = selector.selectedIndex;

    // Get the selected option
    let selectedOption = selector.options[selectedIndex];

    // Get the value and text of the selected option
    let selectedItem = selectedOption.value;

    let leftTextArray = leftText.split(",");
    let rightTextArray = rightText.split(",");

    result.innerText = getResult(leftTextArray, rightTextArray, selectedItem);
}


function getResult(leftTextArray, rightTextArray, selectedItem) {

    let resultArray = [];

    switch (selectedItem) {
        case 'left':
            resultArray = uniqueItemsInLeft(leftTextArray, rightTextArray);
            console.log(resultArray)
            break
        case 'right':
            resultArray = uniqueItemsInRight(leftTextArray, rightTextArray);
            console.log(resultArray)
            break
        case 'both':
            resultArray = getAllUniqueItems(leftTextArray, rightTextArray);
            break
        default:
            break
    }

    let result = "";
    for (let i = 0; i < resultArray.length; i++) {
        result += resultArray[i];
        if (i !== resultArray.length - 1) {
            result += ",";
        }
    }

    console.log(result)

    return result;
}

function uniqueItemsInLeft(leftTextArray, rightTextArray) {
    let resultArray = [];

    for (let i = 0; i < leftTextArray.length; i++) {
        if (!rightTextArray.includes(leftTextArray[i])) {
            resultArray.push(leftTextArray[i]);
        }
    }

    return resultArray;
}

function uniqueItemsInRight(leftTextArray, rightTextArray) {
    let resultArray = [];

    for (let i = 0; i < rightTextArray.length; i++) {
        if (!leftTextArray.includes(rightTextArray[i])) {
            resultArray.push(rightTextArray[i]);
        }
    }

    return resultArray;
}

function getAllUniqueItems(leftTextArray, rightTextArray) {
    let resultArray = [];

    let leftItems = uniqueItemsInLeft(leftTextArray, rightTextArray)
    let rightItems = uniqueItemsInRight(leftTextArray, rightTextArray)

    resultArray = resultArray.concat(leftItems).concat(rightItems);
    return resultArray;
}