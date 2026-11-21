function saveData() {

    let name = document.getElementById("userName").value;

    if (name == "") {
        document.getElementById("result").innerHTML =
            "Please enter your name!";
    } else {
        localStorage.setItem("username", name);

        document.getElementById("result").innerHTML =
            "Name Saved Successfully!";
    }
}


function getData() {

    let name = localStorage.getItem("username");

    if (name == null) {
        document.getElementById("result").innerHTML =
            "No name found!";
    } else {
        document.getElementById("result").innerHTML =
            "Your Name is: " + name;
    }
}


function removeData() {

    localStorage.removeItem("username");

    document.getElementById("result").innerHTML =
        "Name Removed Successfully!";
}


function clearData() {

    localStorage.clear();

    document.getElementById("result").innerHTML =
        "All Data Cleared!";
}
