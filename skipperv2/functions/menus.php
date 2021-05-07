<?php

// Register Menus
function register_menus() {
  register_nav_menus(array(
    'primary-nav' => 'Primary Navigation'
  ));
}
add_action('init', 'register_menus');
