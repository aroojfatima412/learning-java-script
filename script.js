function testValidity() {
    let a = document.getElementById("input").value;
    if (a >= 18) {
        document.getElementById("output").innerHTML = "You are eligible to vote.";
    } else if (a < 18 && a > 0) {
        document.getElementById("output").innerHTML = "You are not eligible to vote.";
    } else {
        document.getElementById("output").innerHTML = "Please enter a valid age.";
    }

}

function checkAge() {

    let age = document.getElementById("age").value;

    if (age >= 18) {
        document.getElementById("num").innerHTML = "You are an adult.";
    } else {
        document.getElementById("num").innerHTML = "You are not an adult.";
    }

}

function findResult() {

    let marks = document.getElementById("marks").value;

    if (marks >= 80) {
        document.getElementById("result").innerHTML = "Grade A";
    } 
    else if (marks >= 70) {
        document.getElementById("result").innerHTML = "Grade B";
    } 
    else if (marks >= 60) {
        document.getElementById("result").innerHTML = "Grade C";
    } 
    else if (marks >= 50) {
        document.getElementById("result").innerHTML = "Grade D";
    } 
    else {
        document.getElementById("result").innerHTML = "Fail";
        document.getElementById("result").style.background = "red";
    }
}
// for OR condition check ||
// for AND condition check &&

//loops 

let output = "";

for (let i = 1; i <= 10; i++) {
    output += i + "<br>";
}

document.getElementById("dig").innerHTML = output;

let j = 1;
output = "";

  while (j <= 5) { 
    output += j + "<br>"; j++;
 }

 document.getElementById("NUM").innerHTML = output;


 //Strings

 
function showResults() {

    let text = document.getElementById("userText").value;

    let result = "";

    // 1. String Types
    let singleQuotes = 'Hello';
    let doubleQuotes = "World";
    let templateString = `Welcome to the ${doubleQuotes}`;

    result += "===== STRING TYPES =====\n";
    result += "Single Quotes: " + singleQuotes + "\n";
    result += "Double Quotes: " + doubleQuotes + "\n";
    result += "Template String: " + templateString + "\n\n";

    // 2. String Property
    result += "===== STRING PROPERTY =====\n";
    result += "Length: " + text.length + "\n\n";

    // 3. Uppercase and Lowercase
    result += "===== CASE METHODS =====\n";
    result += "Uppercase: " + text.toUpperCase() + "\n";
    result += "Lowercase: " + text.toLowerCase() + "\n\n";

    // 4. Character Methods
    result += "===== CHARACTER METHODS =====\n";
    result += "charAt(0): " + text.charAt(0) + "\n";
    result += "at(-1): " + text.at(-1) + "\n\n";

    // 5. Search Methods
    result += "===== SEARCH METHODS =====\n";
    result += "indexOf('a'): " + text.indexOf("a") + "\n";
    result += "lastIndexOf('a'): " + text.lastIndexOf("a") + "\n";
    result += "includes('Hello'): " + text.includes("Hello") + "\n";
    result += "startsWith('Hello'): " + text.startsWith("Hello") + "\n";
    result += "endsWith('!'): " + text.endsWith("!") + "\n\n";

    // 6. Extract Methods
    result += "===== EXTRACT METHODS =====\n";
    result += "slice(0,5): " + text.slice(0, 5) + "\n";
    result += "substring(0,5): " + text.substring(0, 5) + "\n\n";

    // 7. Replace Methods
    result += "===== REPLACE METHODS =====\n";
    result += "replace('a','X'): " + text.replace("a", "X") + "\n";
    result += "replaceAll('a','X'): " + text.replaceAll("a", "X") + "\n\n";

    // 8. Other Methods
    result += "===== OTHER METHODS =====\n";
    result += "concat: " + text.concat(" Student") + "\n";
    result += "repeat(2): " + text.repeat(2) + "\n";
    result += "split(' '): " + JSON.stringify(text.split(" ")) + "\n\n";

    // 9. Remove Spaces
    let spaces = "   " + text + "   ";

    result += "===== SPACE METHODS =====\n";
    result += "trim: " + spaces.trim() + "\n";
    result += "trimStart: " + spaces.trimStart() + "\n";
    result += "trimEnd: " + spaces.trimEnd() + "\n\n";

    // 10. Padding Methods
    result += "===== PADDING METHODS =====\n";
    result += "padStart: " + text.padStart(20, "Arooj") + "\n";
    result += "padEnd: " + text.padEnd(24, "Fatima") + "\n\n";

    // 11. String Type Checking
    result += "===== TYPE CHECKING =====\n";
    result += "type of text: " + typeof text + "\n";

    // Display Results
    document.getElementById("output").textContent = result;
}
