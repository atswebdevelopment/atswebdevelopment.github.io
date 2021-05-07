<?php

// Imports
require_once 'functions/general.php';
require_once 'functions/menus.php';
require_once 'functions/shortcodes.php';
require_once 'functions/portfolio.php';


// Timber
if (!class_exists('Timber')) {
	add_action('admin_notices', function() {
    echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url(admin_url('plugins.php#timber')) . '">' . esc_url(admin_url('plugins.php')) . '</a></p></div>';
	});

	return;
}


Timber::$dirname = array('twig');

use Timber\FunctionWrapper;

class Site extends TimberSite {

	function __construct() {
    add_theme_support('html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption'));
    add_theme_support('automatic-feed-links');
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('menus');

		add_filter('timber_context', array($this, 'add_to_context'));
		add_filter('get_twig', array($this, 'add_to_twig'));

    parent::__construct();
	}

	function add_to_context($context) {
    $context['site'] = $this;
    $context['ajax_url'] = admin_url('admin-ajax.php');

    $context['primary_nav'] = new TimberMenu('primary-nav');

    $context['do_shortcode'] = new FunctionWrapper('do_shortcode');
    $context['apply_filters'] = new FunctionWrapper('apply_filters');
    $context['has_nav_menu'] = new FunctionWrapper('has_nav_menu');
    $context['get_primary_category'] = new FunctionWrapper('get_primary_category');
    $context['debug_object'] = new FunctionWrapper('debug_object');

    $context['supports_divi'] = true;

    $context['wp_debug'] = WP_DEBUG;

    if (function_exists('acf_add_options_page')) {
      $context['options'] = get_fields('option');
    }

		return $context;
	}

	function add_to_twig($twig) {
		return $twig;
	}

}

new Site();
