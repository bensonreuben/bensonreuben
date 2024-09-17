var hambuger = document.getElementById("hambuger");
var close = document.getElementById("close");
var headersm = document.getElementById("headersm");

hambuger.addEventListener("click", () => {
  headersm.classList.add("active");
});

close.addEventListener("click", () => {
  headersm.classList.remove("active");
});
