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


function enfile_css_js()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "/style.css");
    $version_js =  filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
    wp_enqueue_style(
        "carrousel",
        plugin_dir_url(__FILE__) . "/style.css",
        array(),
        $version_css
    );
    wp_enqueue_script(
        "carrousel",
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    );
}
add_action("wp_enqueue_scripts", "enfile_css_js");
function genere_carrousel()
{
    $chaine = '<div class="carrousel">
                    <button class="carrousel__x">X</button>
                    <button class="carrousel__gauche">gauche</button>
                    <button class="carrousel__droite">droite</button>
                    <figure class="carrousel__figure"></figure>
                    <form class="carrousel__form"></form>
                </div>';
    return $chaine; // TODO: ajouter radio bouton dans form
}

add_shortcode("carrousel", "genere_carrousel");