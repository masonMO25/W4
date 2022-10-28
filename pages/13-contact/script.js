const form = document.querySelector("form");
const p = document.querySelector("p");

function createResponseMessage(formInfo) {
  return `
  <p>Thank you ${formInfo.name} for your message!</p>`;
}

function handleSubmit(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const userInputs = Objects.fromEnties(data.entries());
  console.log(userInputs);

  p.innerHTML = createResponseMessage(userInputs);
}

form.addEventListener("submit", handleSubmit);
