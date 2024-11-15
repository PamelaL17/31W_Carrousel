(function () {

  let carrousel__bouton = document.querySelector(".carrousel__bouton");
  let carrousel__x = document.querySelector(".carrousel__x");
  let carrousel = document.querySelector(".carrousel");
  let carrousel__image = document.querySelector(".carrousel__image");
  let carrousel__figure = document.querySelector(".carrousel__figure");
  let galerie = document.querySelector(".galerie");
  let galerie__img = document.querySelectorAll(".galerie img");
  
  console.log(galerie__img.length);
  
  function remplirCarrousel() {
    for (elm of galerie__img) {
      console.log(elm.src);
      let img = document.createElement("img");
      img.src = elm.src; // copie une image de la galerie vers le carrousel
      img.classList.add("carrousel__img");
      carrousel__figure.appendChild(img);
    }
  }

  carrousel__bouton.addEventListener("click", function () {

    if (carrousel__figure.innerHTML === "") {
      remplirCarrousel();
    }
    afficheImage(4);

    carrousel.classList.add("carrousel--ouvrir");
    console.log("Ouvrir");
  });

  carrousel__x.addEventListener("click", function () {
    carrousel.classList.remove("carrousel--ouvrir");
    console.log("fermer");
  });

  function afficheImage(index) {
    
    let carrousel__img = document.querySelectorAll(".carrousel__img");

    for (let i = 0; i < carrousel__img.length; i++) {
      carrousel__img[i].classList.remove("carrousel__img--visible");
    }
    carrousel__img[index].classList.add("carrousel__img--visible");
  }

})();
