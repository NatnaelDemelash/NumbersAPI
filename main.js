const form = document.querySelector("form");
const factDiv = document.querySelector(".number-fact");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = e.target.querySelector("input").value;
  const loadText = "wait a little bit ⌛";

  factDiv.innerHTML = loadText;

  const baseUrl = "http://numbersapi.com/";
  fetch(baseUrl + number)
    .then((response) => response.text())
    .then((text) => (factDiv.innerHTML = text));

  console.log(number);
});
