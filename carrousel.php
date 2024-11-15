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
    return "Hello le monde";
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
    $chaine = "<button id='bouton__ouvrir' class='bouton__ouvrir'>Ouvrir</button>";
    $chaine .= "<div id='carrousel' class='carrousel'>";
    $chaine .= "<button id='carrousel__x' class='carrousel__x'>X</button>";
    $chaine .= "</div>";
    return $chaine;
}

add_shortcode("carrousel", "genere_carrousel");