<?php

/* Template Name: Work */

$context = Timber::get_context();

$post = new TimberPost();

$context['post'] = $post;

$context['projects'] = new Timber\PostQuery(array(
  'post_type' => 'project',
  'posts_per_page' => -1
));

$context['supports_divi'] = false;

Timber::render('templates/work.twig', $context);
