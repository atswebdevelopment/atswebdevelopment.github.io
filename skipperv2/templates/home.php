<?php

/* Template Name: Home */

$context = Timber::get_context();

$post = new TimberPost();

$context['post'] = $post;

$context['supports_divi'] = false;

Timber::render('templates/home.twig', $context);