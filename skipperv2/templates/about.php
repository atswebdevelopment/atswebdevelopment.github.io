<?php

/* Template Name: About */

$context = Timber::get_context();

$post = new TimberPost();

$context['post'] = $post;

$context['supports_divi'] = false;

Timber::render('templates/about.twig', $context);
