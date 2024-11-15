(function () {
  let carrousel__bouton = document.querySelector(".carrousel__bouton");
  let carrousel__x = document.querySelector(".carrousel__x");
  let carrousel = document.querySelector(".carrousel");
  let carrousel__image = document.querySelector(".carrousel__image");
  let carrousel__figure = document.querySelector(".carrousel__figure");
  let galerie = document.querySelector(".galerie");
  let galerie__img = document.querySelectorAll(".galerie img");
  let carrousel__gauche = document.querySelector(".carrousel__gauche");
  let carrousel__droite = document.querySelector(".carrousel__droite");
  let carrousel__form = document.querySelector(".carrousel__form");

  let index = 0; // Suivi de l'index de l'image courante

  console.log(galerie__img.length);

  carrousel__droite.addEventListener("click", function () {
    index = (index + 1) % galerie__img.length; // passe a l'image suivante et boucle au debut si on depasse la derniere image
    afficheImage(index);
  });

  carrousel__gauche.addEventListener("click", function () {
    index = (index - 1 + galerie__img.length) % galerie__img.length; // passe a l'image precedente et boucle a la fin si on est avant la premiere image
    afficheImage(index);
  });

  function remplirCarrousel() {
    for (elm of galerie__img) {
      let img = document.createElement("img");
      img.src = elm.src; // copie une image de la galerie vers le carrousel
      img.classList.add("carrousel__img");
      carrousel__figure.appendChild(img);
      creationRadio(i); // creer un bouton radio pour chaque image
    }
  }

  /**
   * Creation d'un radio
   * Cree un element input et ajouter les attribut type, class, value
   * @param {
   * i numero de radio }
   */
  function creationRadio(i) {
    let radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "carrousel__radio";
    radio.value = i; // chaque radio a un numero d'index correspondant a l'image
    radio.classList.add("carrousel__radio");

    radio.addEventListener("click", function () {
      afficheImage(i); // affichera l'image lorsqu'on clique
    });

    carrousel__form.appendChild(radio);
  }

  // Listener pour ouvrir le carrousel depuis une image de la galerie
  galerie__img.forEach((img, i) => {
    img.addEventListener("click", function () {

      if (carrousel__figure.innerHTML === "") {
        remplirCarrousel(); // Remplit le carrousel
      }

      index = i; // Définit l'index sur l'image cliquée
      afficheImage(index);
      carrousel.classList.add("carrousel--ouvrir");

      console.log("Carrousel ouvert a l'image :", index);
    });
  });

  carrousel__x.addEventListener("click", function () {
    carrousel.classList.remove("carrousel--ouvrir");
    console.log("fermer");
  });

  function afficheImage(index) {
    let carrousel__img = document.querySelectorAll(".carrousel__img");
    let carrousel__radio = document.querySelectorAll(".carrousel__radio");

    for (let i = 0; i < carrousel__img.length; i++) {
      carrousel__img[i].classList.remove("carrousel__img--visible");
      carrousel__radio[i].checked = false; // deselectionne tous les boutons radio
    }

    carrousel__img[index].classList.add("carrousel__img--visible");
    carrousel__radio[index].checked = true; // selectionne le bouton radio correspondant
  }
})();
