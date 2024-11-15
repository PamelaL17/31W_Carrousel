<?php

/**
 * plugin name: Carrousel
 * description: Carrousel permettant d'afficher le contenu d'une galerie
 * version: 1.0.0
 * author: Pamela Limoges
 * author uri: https://referenced.ca
 */
/**
 * généré le code HTML d'une partie de la boîte modale
 * créer un bouton qui permettra d'ouvrir la boîte modale
 * créer une feuille de style pour la boîte modale
 * script permettant d'ouvrir et fermer la boîte modale
 */


function ajoute_texte()
{
    return "Hello le monde";
}
add_shortcode("mon_texte", "ajoute_texte");