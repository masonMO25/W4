// TODO: Select the HTML element
const html = document.querySelector("html");
const input = document.querySelector("input");

input.addEventListener("change", function() {
  html.classList.toggle("dark");
});



// TODO: Add 'dark' to its class list whenever the checkbox is checked
// HINT: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

