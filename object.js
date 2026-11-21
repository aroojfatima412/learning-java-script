let student = {
    name: "Arooj",
    age: 20,
    department: "CYS",
    city: "Faisalabad"
};


function showStudent() {

    document.getElementById("output").innerHTML =
        "Name: " + student.name + "<br>" +
        "Age: " + student.age + "<br>" +
        "Department: " + student.department + "<br>" +
        "City: " + student.city;
}


function showName() {

    document.getElementById("output").innerHTML =
        "Student Name: " + student.name;
}


function showAge() {

    document.getElementById("output").innerHTML =
        "Student Age: " + student.age;
}


function changeCity() {

    student.city = "Lahore";

    document.getElementById("output").innerHTML =
        "Updated City: " + student.city;
}


function addSubject() {

    student.subject = "JavaScript";

    document.getElementById("output").innerHTML =
        "New Subject: " + student.subject;
}
