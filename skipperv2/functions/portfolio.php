<?php

// // Register Post Type
// function portfolio_post_type() {
//   $labels = array(
//     'name'          => 'Portfolio',
//     'singular_name' => 'Project'
//   );

//   $args = array(
//     'labels'        => $labels,
//     'public'        => true,
//     'menu_icon'     => 'dashicons-portfolio',
//     'supports'      => array('title', 'editor', 'thumbnail'),
//     'rewrite'       => array('slug' => 'portfolio')
//   );

//   register_post_type('portfolio', $args);
// }
// add_action('init', 'portfolio_post_type');



// function portfolio_category_taxonomy() {
//   $labels = array(
//     'name'          => 'Portfolio Categories',
//     'singular_name' => 'Portfolio Category',
//     'menu_name'     => 'Categories'
//   );

//   $args = array(
//     'hierarchical'  => true,
//     'labels'        => $labels,
//     'rewrite'       => array('slug' => 'portfolio-category')
//   );

//   register_taxonomy('portfolio_category', 'portfolio', $args);
// }
// add_action('init', 'portfolio_category_taxonomy');



// function ss_et_builder_post_types($post_types) {
//   $post_types[] = 'portfolio';

//   return $post_types;
// }
// add_filter('et_builder_post_types', 'ss_et_builder_post_types', 10, 1);

// function ss_et_project_posttype_args($args) {
//   return array_merge($args, array(
//     'public'              => false,
//     'publicly_queryable'  => false,
//     'show_ui'             => false,
//     'show_in_nav_menus'   => false,
//     'exclude_from_search' => true
//   ));
// }
// add_filter('et_project_posttype_args', 'ss_et_project_posttype_args', 10, 1);

// function ss_et_modify_project_taxonomies() {
//   $project_category_args = get_taxonomy('project_category');
//   $project_tag_args = get_taxonomy('project_tag');

//   if ($project_category_args) {
//     $project_category_args->public = false;
//     $project_category_args->publicly_queryable = false;
//     $project_category_args->show_ui = false;
//     $project_category_args->show_in_nav_menus = false;
//     $project_category_args->exclude_from_search = true;
//     register_taxonomy('project_category', 'project', (array) $project_category_args);
//   }

//   if ($project_tag_args) {
//     $project_tag_args->public = false;
//     $project_tag_args->publicly_queryable = false;
//     $project_tag_args->show_ui = false;
//     $project_tag_args->show_in_nav_menus = false;
//     $project_tag_args->exclude_from_search = true;
//     register_taxonomy('project_tag', 'project', (array) $project_tag_args);
//   }
// }
// add_action('init', 'ss_et_modify_project_taxonomies', 11);
