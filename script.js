document.addEventListener("DOMContentLoaded", function () {
  const divs = document.querySelectorAll(".item");

  divs.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.style.boxShadow = "0 0 15px 5px rgba(0, 150, 255, 0.8)";
    });

    div.addEventListener("mouseout", function () {
      div.style.boxShadow = "none";
    });
  });
});
