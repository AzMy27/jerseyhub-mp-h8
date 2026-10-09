function myFunction() {
  var buttonHamburger = document.getElementById("myLinks");

  buttonHamburger.classList.toggle("hidden");
  buttonHamburger.classList.toggle("flex-col");

  buttonHamburger.classList.toggle("absolute");
  buttonHamburger.classList.toggle("top-12");
  buttonHamburger.classList.toggle("left-0");
  buttonHamburger.classList.toggle("w-full");
  buttonHamburger.classList.toggle("bg-primary-dark");
  buttonHamburger.classList.toggle("p-4");
}

function toggleFaq(idFaq) {
  var kotakFaq = document.getElementById(idFaq);
  kotakFaq.classList.toggle("hidden");
}
