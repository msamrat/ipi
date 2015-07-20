<?php 
require_once( '/../../../../wp-load.php' );

// WP_Query arguments
$args = array( 'post_type' => 'country', 'post_status'=> 'publish','posts_per_page' => -1 );
// The Query
$query = new WP_Query( $args );

// The Loop
if ( $query->have_posts() ) {
	$first_run = 0;
	echo "var countryOtherData = [";
	while ( $query->have_posts() ) {
		
		
		$query->the_post();
		// do something
		
		 $FIELD1 = get_post_meta(get_the_ID(),'field1',true);
		 $FIELD3 = get_post_meta(get_the_ID(),'field3',true);
		 $FIELD4 = get_post_meta(get_the_ID(),'field4',true);
		 $FIELD5 = get_post_meta(get_the_ID(),'field5',true);		
		 $FIELD6 = get_post_meta(get_the_ID(),'field6',true);		
		 
		 
		if($first_run == 0){
			
			$first_run = 1;
		}else{
			echo ",";
			
		}
		?>
		{
    "FIELD1":"<?php echo $FIELD1; ?>",
    "FIELD3":"<?php echo $FIELD3; ?>",
    "FIELD4":"<?php echo $FIELD4; ?>",
    "FIELD5":"<?php echo $FIELD5; ?>",
    "FIELD6":"<?php echo $FIELD6; ?>",
    
  }
		<?php
		
		
	}
	echo "];";
	
	echo "var countrydata = [";
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
		 $rank 						= get_post_meta(get_the_ID(),'rank',true);
		//Judicial Independence	 
		$ji_rank 					= get_post_meta(get_the_ID(),'ji_rank',true);
		$ji_country_score 			= get_post_meta(get_the_ID(),'ji_country_score',true);
		$ji_world_everage 			= get_post_meta(get_the_ID(),'ji_world_everage',true);
		$ji_income_group_everage 	= get_post_meta(get_the_ID(),'ji_income_group_everage',true);
		$ji_regional_everage 		= get_post_meta(get_the_ID(),'ji_regional_everage',true);
		//Administrative Simplicity		
		$as_rank 					= get_post_meta(get_the_ID(),'as_rank',true);
		$as_country_score 			= get_post_meta(get_the_ID(),'as_country_score',true);
		$as_world_everage 			= get_post_meta(get_the_ID(),'as_world_everage',true);
		$as_income_group_everage 	= get_post_meta(get_the_ID(),'as_income_group_everage',true);
		$as_regional_everage 		= get_post_meta(get_the_ID(),'as_regional_everage',true);
		//Trade Openness	
		$trade_openness_rank 					= get_post_meta(get_the_ID(),'trade_openness_rank',true);
		$trade_openness_country_score 			= get_post_meta(get_the_ID(),'trade_openness_country_score',true);
		$trade_openness_world_everage 			= get_post_meta(get_the_ID(),'trade_openness_world_everage',true);
		$trade_openness_income_group_everage 	= get_post_meta(get_the_ID(),'trade_openness_income_group_everage',true);
		$trade_openness_regional_everage 		= get_post_meta(get_the_ID(),'trade_openness_regional_everage',true);
		//Budget Transparency	
		$bt_rank			 					= get_post_meta(get_the_ID(),'bt_rank',true);
		$bt_country_score 			= get_post_meta(get_the_ID(),'bt_country_score',true);
		$bt_world_everage 			= get_post_meta(get_the_ID(),'bt_world_everage',true);
		$bt_income_group_everage 	= get_post_meta(get_the_ID(),'bt_income_group_everage',true);
		$bt_regional_everage 		= get_post_meta(get_the_ID(),'bt_regional_everage',true);
		//E-Transparency	
		$et_rank			 					= get_post_meta(get_the_ID(),'et_rank',true);
		$et_country_score 			= get_post_meta(get_the_ID(),'et_country_score',true);
		$et_world_everage 			= get_post_meta(get_the_ID(),'et_world_everage',true);
		$et_income_group_everage 	= get_post_meta(get_the_ID(),'et_income_group_everage',true);
		$et_regional_everage 		= get_post_meta(get_the_ID(),'et_regional_everage',true);
		//Administrative Simplicity		
		$dc_rank			 					= get_post_meta(get_the_ID(),'dc_rank',true);
		$dc_country_score 			= get_post_meta(get_the_ID(),'dc_country_score',true);
		$dc_world_everage 			= get_post_meta(get_the_ID(),'dc_world_everage',true);
		$dc_income_group_everage 	= get_post_meta(get_the_ID(),'dc_income_group_everage',true);
		$dc_regional_everage 		= get_post_meta(get_the_ID(),'dc_regional_everage',true);
		
		if($first_run == 0){
			
			$first_run = 1;
		}else{
			echo "";
			
		}
		?>
		{
    "countryname":"<?php echo $country_name; ?>",
    "countrycode":"<?php echo $country_code; ?>",
    "region":"<?php echo $region; ?>",
    "income_class":"<?php echo $income_class; ?>",
    "income_class_shortcode":"<?php echo $income_class_shortcode; ?>",
    "IPI":<?php echo $ipi_score; ?>,
	'rank':<?php echo $rank; ?>,
    
	
	
	"Judicial Independence":{'rank': <?php echo $ji_rank; ?>, 'country_score': <?php echo $ji_country_score; ?>, 'world_everage': <?php echo $ji_world_everage; ?>, 'income_group_everage': <?php echo $ji_income_group_everage; ?>, 'regional_everage': <?php echo $ji_regional_everage; ?>},
	
    "Administrative Simplicity":{'rank': <?php echo $as_rank; ?>, 'country_score': <?php echo $as_country_score; ?>, 'world_everage': <?php echo $as_world_everage; ?>, 'income_group_everage': <?php echo $as_income_group_everage; ?>, 'regional_everage': <?php echo $as_regional_everage; ?>},
   
    "Trade Openness":{'rank': <?php echo $trade_openness_rank; ?>, 'country_score': <?php echo $trade_openness_country_score; ?>, 'world_everage': <?php echo $trade_openness_world_everage; ?>, 'income_group_everage': <?php echo $trade_openness_income_group_everage; ?>, 'regional_everage': <?php echo $trade_openness_regional_everage; ?>},
    
	"Budget Transparency":{'rank': <?php echo $bt_rank; ?>, 'country_score': <?php echo $bt_country_score; ?>, 'world_everage': <?php echo $bt_world_everage; ?>, 'income_group_everage': <?php echo $bt_income_group_everage; ?>, 'regional_everage': <?php echo $bt_regional_everage; ?>},
	
    "E-Transparency":{'rank': <?php echo $et_rank; ?>, 'country_score': <?php echo $et_country_score; ?>, 'world_everage': <?php echo $et_world_everage; ?>, 'income_group_everage': <?php echo $et_income_group_everage; ?>, 'regional_everage': <?php echo $et_regional_everage; ?>},
    "Digital Citizens":{'rank': <?php echo $dc_rank; ?>, 'country_score': <?php echo $dc_country_score; ?>, 'world_everage': <?php echo $dc_world_everage; ?>, 'income_group_everage': <?php echo $dc_income_group_everage; ?>, 'regional_everage': <?php echo $dc_regional_everage; ?>},
    "flag_image": "<?php echo $flag; ?>" 
    
  }
		<?php
		
		
	}
	echo "];";	
} else {
	// no posts found
}

// Restore original Post Data
wp_reset_postdata();

die;
?>
