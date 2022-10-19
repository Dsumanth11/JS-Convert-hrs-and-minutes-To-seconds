let hrs = document.getElementById("hoursInput");
let mins = document.getElementById("minutesInput");
let cnvrtBtn = document.getElementById("convertBtn");
let errorMsg = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");
cnvrtBtn.addEventListener('click', function() {
    if (hrs.value !== "" && mins.value !== "") {
        timeInSeconds.classList.remove("d-none");
        errorMsg.classList.add("d-none");
        let hr = parseInt(hrs.value);
        let min = parseInt(mins.value);
        let seconds = hr * 3600;
        seconds += min * 60;
        timeInSeconds.textContent = seconds+"sec";
    } else {
        timeInSeconds.classList.add("d-none");
        errorMsg.classList.remove("d-none");
        if (hrs.value === "") {
            errorMsg.textContent = "please Enter correct hours value";
        } else if (mins.value === "") {
            errorMsg.textContent = "please Enter correct minutes value";
        }
    }
});