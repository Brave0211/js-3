var elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elResult = document.querySelector(".js-result");


elForm.addEventListener("submit", function(e){
   e.preventDefault();

   var elInputText = elInput.value;
   var elSelectText = elSelect.value;

   elResult.textContent = elInputText * elSelectText;
})