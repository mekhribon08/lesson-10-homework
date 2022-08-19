var elForm = document.querySelector("[data-form]");
var elInput = document.querySelector("[data-input]");
var elBtn = document.querySelector("[data-btn]");
var elList = document.querySelector("[data-list]");

elBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  var elLi = document.createElement("li");
  elLi.textContent = elInput.value;

  elList.appendChild(elLi);
});
