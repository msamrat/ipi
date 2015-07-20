<?php 
require_once( '../../../../wp-load.php' );

function get_income_shortcode($income_class){
	
	switch($income_class){
		case 'High' : 
			return "h";
			break;
		case 'Upper Middle' : 
			return "um";
			break;
		case 'Lower Middle' : 
			return "lm";
			break;
			
		case 'Low' : 
			return "l";
			break;
	}
	
}

// WP_Query arguments
$args = array( 'post_type' => 'country', 'post_status'=> 'publish','posts_per_page' => -1 );
// The Query
$query = new WP_Query( $args );

// The Loop
if ( $query->have_posts() ) {
	$first_run = 0;
	echo "var data = [";
	while ( $query->have_posts() ) {
		
		
		$query->the_post();
		// do something
		
		 $country_name = get_the_title();
		$country_code = get_post_meta(get_the_ID(),'countrycode',true);
		 $region = get_post_meta(get_the_ID(),'region',true);
		 $income_class = get_post_meta(get_the_ID(),'income_class',true);
		 $income_class_shortcode = get_post_meta(get_the_ID(),'income_class_shortcode',true);
		
		 $ji_score = get_post_meta(get_the_ID(),'judicial_independence',true);		
		 $as_score = get_post_meta(get_the_ID(),'administrative_simplicity',true);		
		 $to_score = get_post_meta(get_the_ID(),'trade_openness',true);		
		 $bt_score = get_post_meta(get_the_ID(),'budget_transparency',true);		
		 $et_score = get_post_meta(get_the_ID(),'e_transparency',true);		
		 $dc_score = get_post_meta(get_the_ID(),'digital_citizens',true);
		
		 $ipi_score = $ji_score + $as_score + $to_score + $bt_score + $et_score + $dc_score;
		 $image = wp_get_attachment_image_src(get_field('flag_image'), 'full'); 
		 $flag = $image[0];
		if($first_run == 0){
			
			$first_run = 1;
		}else{
			echo ",";
			
		}
		?>
		{
    "countryname":"<?php echo $country_name; ?>",
    "countrycode":"<?php echo $country_code; ?>",
    "region":"<?php echo $region; ?>",
    "income_class":"<?php echo $income_class; ?>",
    "income_class_shortcode":"<?php echo $income_class_shortcode; ?>",
    "IPI":<?php echo $ipi_score; ?>,
    "Judicial Independence":<?php echo $ji_score; ?>,
    "Administrative Simplicity":<?php echo $as_score; ?>,
    "Trade Openness":<?php echo $to_score; ?>,
    "Budget Transparency":<?php echo $bt_score; ?>,
    "E-Transparency":<?php echo $et_score; ?>,
    "Digital Citizens":<?php echo $dc_score; ?>,
    "flag_image": "<?php echo $flag; ?>" 
  }
		<?php
		
		
	}
	echo "]";
} else {
	// no posts found
}

// Restore original Post Data
wp_reset_postdata();

die;
?>
