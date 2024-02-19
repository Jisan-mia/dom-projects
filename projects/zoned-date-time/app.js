
const currentTimElement = document.getElementById("current-time");
const zoneIdSelector = document.getElementById("zone-id-selector");
const convertBtn = document.getElementById("convert-btn");
const targetDateElement = document.getElementById("result-date");

window.setInterval(showCurrentDate,1000)

function showCurrentDate(){
    const localDate = new Date();

    // Date pattern
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZoneName: 'short'
    };

    currentTimElement.innerText = "CURRENT DATE TIME : " + new Intl.DateTimeFormat('en-US', options).format(localDate);
}

convertBtn.onclick = () => {
    // Get the selected index
    let selectedIndex = zoneIdSelector.selectedIndex;

    // Get the selected option
    let selectedOption = zoneIdSelector.options[selectedIndex];

    // Get the value and text of the selected option
    let selectedZone = selectedOption.value;

    // Create a Date object in your local time zone
    let localDate = new Date();

    // Convert the local date to the target time zone
    targetDateElement.innerText = selectedZone + " : " + localDate.toLocaleString('en-US', {timeZone: selectedZone.trim()});
}

