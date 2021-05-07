<?php

/* Template Name: Welltodo */

$context = Timber::get_context();

$post = new TimberPost();

$context['post'] = $post;

//$context['post']['page_content_form'] = do_shortcode($context['post']['page_content_form']);

//var_dump($context['post']);

$context['supports_divi'] = false;

Timber::render('templates/welltodo.twig', $context);
