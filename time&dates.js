function showDate() {
    let today = new Date();

    document.getElementById("date").innerHTML =
        today.toLocaleString();
}


function showDetails() {
    let today = new Date();

    document.getElementById("details").innerHTML =
        "Date: " + today.getDate() + "<br>" +
        "Month: " + (today.getMonth() + 1) + "<br>" +
        "Year: " + today.getFullYear() + "<br>" +
        "Hours: " + today.getHours() + "<br>" +
        "Minutes: " + today.getMinutes() + "<br>" +
        "Seconds: " + today.getSeconds();
}


function selectedDate() {
    let userDate = document.getElementById("myDate").value;

    if (userDate == "") {
        document.getElementById("result").innerHTML =
            "Please select a date!";
    } else {
        document.getElementById("result").innerHTML =
            "Your Selected Date: " + userDate;
    }
}


function showClock() {
    let time = new Date();

    document.getElementById("clock").innerHTML =
        time.toLocaleTimeString();
}

showClock();

setInterval(showClock, 1000);
