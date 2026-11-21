const user = {
  name: "Arooj",
  age: 20,
  city: "Faisalabad",
  course: "Cyber Securty"
};

const btn = document.getElementById("showBtn");
const result = document.getElementById("result");

btn.addEventListener("click", function() {
  result.innerHTML = "";

  for (const [key, value] of Object.entries(user)) {
    const li = document.createElement("li");
    li.textContent = key + " : " + value;
    result.appendChild(li);
  }
});