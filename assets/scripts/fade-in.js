const square = document.querySelector(".square");
square.classList.remove("square-transition");

const sobre = document.querySelector(".sobre");
sobre.classList.remove("sobre-transition");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square.classList.add("square-transition");
      sobre.classList.add("sobre-transition");
      return;
    }

    square.classList.remove("square-transition");
    sobre.classList.remove("sobre-transition");
  });
});

observer.observe(document.querySelector(".wrapper"));
