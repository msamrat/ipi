<?php
 
/**
 
* Plugin Name: My custom post
 
* Plugin URI: www.test.com
 
* Description: This plugin is created for create custom post.
 
* Version:  1.0
 
* Author: mahesh samrat
 
* Author URI:Your website goes here
 
* License:  GPL2
 
*/

add_action( 'init', 'country_init' );
function country_init() {
 
$labels = array(
 
'name' => __( 'country', 'post type general name', 'your-plugin-textdomain' ),
 
'singular_name' => __( 'country', 'post type singular name', 'your-plugin-textdomain' ),
 
'menu_name' => __( 'country', 'admin menu', 'your-plugin-textdomain' ),
 
'name_admin_bar'=> __( 'country', 'add new on admin bar', 'your-plugin-textdomain' ),
 
'add_new'   => __( 'Add country', 'book', 'your-plugin-textdomain' ),
 
'add_new_item'=> __( 'Add New country', 'your-plugin-textdomain' ),
 
'new_item'    => __( 'New country', 'your-plugin-textdomain' ),
 
'edit_item'     => __( 'Edit country', 'your-plugin-textdomain' ),
 
'view_item'   => __( 'View country', 'your-plugin-textdomain' ),
 
'all_items'     => __( 'All country', 'your-plugin-textdomain' ),
 
'search_items'=> __( 'Search country', 'your-plugin-textdomain' ),
 
'parent_item_colon' => __( 'Parent country:', 'your-plugin-textdomain' ),
 
'not_found'  => __( 'No country found.', 'your-plugin-textdomain' ),
 
'not_found_in_trash' => __( 'No country found in Trash.', 'your-plugin-textdomain' )
 
);
$args = array(
        'labels'             => $labels, //required 
        'public'             => true,	 // required 
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'book' ),
        'capability_type'    => 'post',
        'has_archive'        => true,	 // required	
        'Hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
    );
    register_post_type( 'country', $args );
    }
 
// create categories of this posts    
function wpmudev_register_taxonomy() {   
// set up labels
$labels = array(
'name' => 'country Categories',
'singular_name' => 'country Category',
'search_items' => 'Search country Categories',
'all_items' => 'All country Categories',
'edit_item' => 'Edit country Category',
'update_item' => 'Update country Category',
'add_new_item' => 'Add New country Category',
'new_item_name' => 'New country Category',
'menu_name' => 'country Categories'
);
// register taxonomy
register_taxonomy( 'countrycategory', 'country', array(
'hierarchical' => true,
'labels' => $labels,
'query_var' => true,
'show_admin_column' => true
) );
}
add_action( 'init', 'wpmudev_register_taxonomy' );
