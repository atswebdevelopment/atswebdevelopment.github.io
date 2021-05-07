<?php

/* Template Name: Services */

$context = Timber::get_context();

$post = new TimberPost();

$context['post'] = $post;

$context['supports_divi'] = false;

Timber::render('templates/services.twig', $context);
