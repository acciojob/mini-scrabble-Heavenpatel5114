//your code here
let evaluatedText = document.querySelector("#evaluatedText");
let letterCount = document.querySelector("#letterCount");

evaluatedText.addEventListener("input", function() {
  letterCount.textContent = evaluatedText.value.length;
});