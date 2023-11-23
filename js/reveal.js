

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach(function (element) {
      var windowHeight = window.innerHeight;
      var elementTop = element.getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
      } else {
          element.classList.remove("active");
      }
  });
}

// Attach the reveal function to the scroll event
window.addEventListener("scroll", reveal);

// Initial call to reveal function to check elements on page load
reveal();
