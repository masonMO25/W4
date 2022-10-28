// TODO: Wire up the buttons to update the count.
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const count = document.querySelector("#count");

// TODO: Don't allow the count to go below 0.
increment.addEventListener("click", function () {
  count.innerText = Number.parseInt(count.innerText) + 1;
});

decrement.addEventListener("click", function () {
  if (Number.parseInt(count.innerText) > 0) {
    count.innerText = Number.parseInt(count.innerText) - 1;
  };
});
