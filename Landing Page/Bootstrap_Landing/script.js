document.addEventListener("DOMContentLoaded", function() {
  const jumbotron = document.querySelector(".jumbotron");

  jumbotron.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#d1d8e0";
  });

  jumbotron.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#e9ecef";
  });

  const featureItems = document.querySelectorAll(".col-sm-4");

  featureItems.forEach(item => {
    item.addEventListener("click", function() {
      this.style.transform = "scale(1.1)";
    });

    item.addEventListener("mouseout", function() {
      this.style.transform = "scale(1)";
    });
  });

  const testimonials = document.querySelector(".testimonials");

  testimonials.addEventListener("click", function() {
    const testimonialsText = this.querySelectorAll("p");
    testimonialsText.forEach(text => {
      text.style.color = "#1abc9c";
    });
  });
});
