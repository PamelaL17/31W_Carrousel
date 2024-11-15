(function () {
  console.log("Vive JavaScript");
  let bouton__ouvrir = document.querySelector(".bouton__ouvrir");
  let carrousel__fermer = document.querySelector(".carrousel__fermer");
  let carrousel__x = document.querySelector(".carrousel__x");
  let carrousel = document.querySelector(".carrousel");
  bouton__ouvrir.addEventListener("click", function () {
    carrousel.classList.add("carrousel--ouvrir");
    console.log("Ouvrir");
  });
  carrousel__x.addEventListener("click", function () {
    carrousel.classList.remove("carrousel--ouvrir");
    console.log("fermer");
  });
})();
