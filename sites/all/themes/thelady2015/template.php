<?php

/**
* @file
* hook_preprocess_node()
*
*/

function thelady2015_preprocess_node(&$variables) {

  // Get a list of all the regions for this theme
  foreach (system_region_list($GLOBALS['theme']) as $region_key => $region_name) {

    // Get the content for each region and add it to the $region variable
    if ($blocks = block_get_blocks_by_region($region_key)) {
      $variables['region'][$region_key] = $blocks;
    }
    else {
      $variables['region'][$region_key] = array();
    }
  }
}


/**
 * Implements hook_preprocess_page().
 */
function thelady2015_preprocess_page(&$variables) {

  // LOAD THE FOLLOWING ON THE (THE LADIES) PAGE
  // ===========================================================================
  if (arg(0) == 'the-ladies' && arg(1) == '') {
    if (empty($variables['page']['content']['#attached']['js'])) {
       $variables['page']['content']['#attached']['js'] = array();
    }
    $variables['page']['content']['#attached']['js'][] = drupal_get_path('theme', 'thelady2015') .'/js/the-ladies.js';
  }
}
