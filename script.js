const form = document.querySelector(".content-form");
const rates = document.querySelectorAll(".radio label input");
const submit = document.querySelector(".content-submit");
const value = document.querySelector(".rate-number");

function handleSubmit(e) {
  e.preventDefault();
  if (!e.srcElement.elements.rate.value) return;
  form.classList.add("disabled");
  submit.classList.remove("disabled");
  value.innerHTML = e.srcElement.elements.rate.value;
}

function handleClick(e) {
  rates.forEach((input) => {
    input.parentElement.classList.remove("active");
  });
  e.target.parentElement.classList.add("active");
}

form.addEventListener("submit", handleSubmit);

rates.forEach((rate) => {
  rate.addEventListener("click", handleClick);
});
