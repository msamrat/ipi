<?php
/*
Template Name: Homepage
*/
if($_SERVER['REQUEST_METHOD'] == "POST" && $_POST['csvfile']==='csv') {

    $fileName = date("d-m-y") . '-bv-directory.csv';
    $content = ""; // content added below

    // Title of the CSV
    $content = "ID,Country Name,Country Code,Region,Icome class,Judicial Independence,Administrative Simplicity,Trade Openness,Budget Transparency,E_transparency,Digital Citizens \n";

global $post;
$args = array(     'numberposts' => -1,    'orderby' => 'post_title',    'order' => 'DESC',    'post_type' => 'country',    'post_status' => 'publish');
$myposts = get_posts( $args );
foreach( $myposts as $post ) : setup_postdata($post); 
		 
		 $country_name 		= get_the_title();
    		 $country_code 		= get_post_meta($post->ID,'countrycode',true);
		 $region 		= get_post_meta($post->ID,'region',true);
		 $income_class 		= get_post_meta($post->ID,'income_class',true);
		 $income_class_shortcode = get_post_meta($post->ID,'income_class_shortcode',true);
		 $ji_score 		= get_post_meta($post->ID,'judicial_independence',true);		
		 $as_score 		= get_post_meta($post->ID,'administrative_simplicity',true);		
		 $to_score 		= get_post_meta($post->ID,'trade_openness',true);		
		 $bt_score 		= get_post_meta($post->ID,'budget_transparency',true);		
		 $et_score 		= get_post_meta($post->ID,'e_transparency',true);		
		 $dc_score 		= get_post_meta($post->ID,'digital_citizens',true);
		
		 $ipi_score = $ji_score + $as_score + $to_score + $bt_score + $et_score + $dc_score;
		 $image = wp_get_attachment_image_src(get_field('flag_image'), 'full'); 
		 $flag = $image[0];
     
    // $content .= $post->ID.",".$country_name.",".$country_code.",".$region.",".$income_class.",".$ji_score.",".$ji_score.",".$as_score.",".$to_score.",".$bt_score .",".$et_score.",".$dc_score."\r\n";
 $content .= $post->ID.",".$country_name.",".$country_code.",".$region.",".$income_class.",".$ji_score.",".$as_score.",".$to_score.",".$bt_score.",".$et_score.",".$dc_score."\n";
//$content .= $bt_score .",".$et_score.",".$dc_score."\r\n";
 endforeach;
    // Data in the CSV
    //$content .= "\"John Doe\",\"New York, USA\",15,65465464 \n";

    // Create csv and force download
    header('Content-Type: application/csv'); 
   // header("Content-length: " . filesize($NewFile)); 
    header('Content-Disposition: attachment; filename="' . $fileName . '"'); 
    header("Pragma: no-cache");
    header("Expires: 0");
    echo $content;

    exit;
}

if($_SERVER['REQUEST_METHOD'] == "POST" && $_POST['exelfile']==='exel') {

    $fileName = date("d-m-y") . '-bv-directory.xls';
    $content = ""; // content added below

    // Title of the CSV
    $content = "ID\t Country Name\t Country Code\t Region\t Icome class\t Judicial Independence\t Administrative Simplicity\t Trade Openness\t Budget Transparency\t E_transparency\t Digital Citizens \n";

global $post;
$args = array(     'numberposts' => -1,    'orderby' => 'post_title',    'order' => 'DESC',    'post_type' => 'country',    'post_status' => 'publish');
$myposts = get_posts( $args );
foreach( $myposts as $post ) : setup_postdata($post); 
		 
		 $country_name 		= get_the_title();
    		 $country_code 		= get_post_meta($post->ID,'countrycode',true);
		 $region 		= get_post_meta($post->ID,'region',true);
		 $income_class 		= get_post_meta($post->ID,'income_class',true);
		 $income_class_shortcode = get_post_meta($post->ID,'income_class_shortcode',true);
		 $ji_score 		= get_post_meta($post->ID,'judicial_independence',true);		
		 $as_score 		= get_post_meta($post->ID,'administrative_simplicity',true);		
		 $to_score 		= get_post_meta($post->ID,'trade_openness',true);		
		 $bt_score 		= get_post_meta($post->ID,'budget_transparency',true);		
		 $et_score 		= get_post_meta($post->ID,'e_transparency',true);		
		 $dc_score 		= get_post_meta($post->ID,'digital_citizens',true);
		
		 $ipi_score = $ji_score + $as_score + $to_score + $bt_score + $et_score + $dc_score;
		 $image = wp_get_attachment_image_src(get_field('flag_image'), 'full'); 
		 $flag = $image[0];
     
    // $content .= $post->ID.",".$country_name.",".$country_code.",".$region.",".$income_class.",".$ji_score.",".$ji_score.",".$as_score.",".$to_score.",".$bt_score .",".$et_score.",".$dc_score."\r\n";
 $content .= $post->ID."\t".$country_name."\t".$country_code."\t".$region."\t".$income_class."\t".$ji_score."\t".$as_score."\t".$to_score."\t".$bt_score."\t".$et_score."\t".$dc_score."\n";
//$content .= $bt_score .",".$et_score.",".$dc_score."\r\n";
 endforeach;
    // Data in the CSV
    //$content .= "\"John Doe\",\"New York, USA\",15,65465464 \n";

    // Create csv and force download
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); 
   // header("Content-length: " . filesize($NewFile)); 
    header('Content-Disposition: attachment; filename="' . $fileName . '"'); 
    header("Pragma: no-cache");
    header("Expires: 0");
    echo $content;

    exit;
}
?>

<?php get_header(); ?>

<div class="pop-up-2" id="pop-up-2">
	<table class="table">
		<tr>
			<!-- <a href="#" class="close">x</a> -->
			<td class="title" colspan="3">
				Country name
			</td>
		</tr>
		<tr>
			<td class="icon"><img data-href="<?php bloginfo('stylesheet_directory'); ?>" src="" alt=""></td>
			<td class="category">category</td>
			<td class="value">value</td>
		</tr>
	</table>
	<div class="row2 arrow">
		<div class="arrow-down"></div>
	</div>
</div>
		


			<div id="content" class="clearfix row">
			
				<div id="main" class="col-sm-12 clearfix" role="main">

					
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
						<?php the_content(); ?>
						<?php endwhile; ?>	
						<?php endif; ?>			
						<section class="row post_content">
							<div class="container">
								<div class="row2 social-row">
									<div class="row">
										<div class="col-xs-12 col-sm-6 left">
											<p>Based on 2014 data</p>
										</div>
										<div class="col-xs-12 col-sm-6 right text-right">
											<a href="#" class="social download" id="trigger"><span class="fa fa-download"></span></a>
											<?php echo do_shortcode('[egwSocialShare]'); ?>
											
										</div>
									</div>
							    </div>
							</div>
						
							<div class="col-sm-12">

								<!-- ///////////////////// toolbar starts ///////////////////// -->
<section class="row2 toolbar-wrapper">
	<div class="container">
		<div class="row2 toolbar" id="toolbar">
			<div class="left">
				<table class="table">
					<tr>
						<td class="rank">
							<p id="rank">Ra<span>nk</span></p>
						</td>
						<td class="flag hidden-sm"></td>
						<td class="compare popup-parent">
							<div class="pop-up">
								<div class="content">
									<p class="text">Select To Compare</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
							<div class="compare-tool" id="compare-tool">
								<p class="default-text"><span>Select to</span> Compare</p>
								<a href="#">Compare</a>
							</div>
						</td>
						<td class="country-name popup-parent">
							<div class="pop-up">
								<div class="content">
									<p class="text">Click to sort countries alphabetically</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
							<a href="#" id="countryBtn">Country</a>
						</td>
						<td class="ipi popup-parent" id="tolbar-ipi">
							<div class="pop-up">
								<div class="content">
									<p class="text">Click to sort countries by IPI</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
							<a href="#"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/cont/ipi-toolbar.png" alt="ipi logo" /></a>
						</td>
					</tr>
				</table>
			</div>
			<div class="middle">
				<div class="view-toggle-wrapper" id="view-changer">
					<input type="checkbox" name="view-toggle" id="view-toggle">
					<label for="view-toggle"></label>
					<p class="ranking-view active">Ranking View</p>
					<p class="component-view">Component View</p>
				</div>
				<div class="filter-wrapper " id="filter-wrapper">
					<div class="filter-names popup-parent">
						<div class="pop-up">
							<div class="content">
								<p class="text">Sort By</p>
							</div>
							<div class="row2 arrow">
								<div class="arrow-down"></div>
							</div>
						</div>
						<p class="filter-btn income-group-btn" data-toggle="income-group-links">Income</p>
						<p class="filter-btn region-btn" data-toggle="region-links">Region</p>
					</div>
					<div class="filters" id="income-group-links">
						<a href="#" data-target="h" class="filter active first incom-group">High</a>
						<a href="#" data-target="um" class="filter active first incom-group">Upper Middle</a>
						<a href="#" data-target="lm" class="filter active incom-group">Lower Middle</a>
						<a href="#" data-target="l" class="filter active incom-group">Low&nbsp;</a>
					</div>
					<div class="filters" id="region-links">
						<a href="#" data-target="eurna" class="filter active first region region-eurna popup-parent">
							EURNA
							<div class="pop-up">
								<div class="content">
									<p class="text">Europe &amp; North America</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
						</a>
						<a href="#" data-target="apac" class="filter active first region region-apac popup-parent">
							APAC
							<div class="pop-up">
								<div class="content">
									<p class="text">Asia &amp; Pacific</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
						</a>
						<a href="#" data-target="lac" class="filter active first region region-lac popup-parent">
							LAC
							<div class="pop-up">
								<div class="content">
									<p class="text">Latin America &amp; Caribbean</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
						</a>
						<a href="#" data-target="eeca" class="filter active region region-eeca popup-parent">
							&nbsp;EECA&nbsp;
							<div class="pop-up">
								<div class="content">
									<p class="text">Eastern Europe &amp; Central Asia</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
						</a>
						<a href="#" data-target="mena" class="filter active region region-mena popup-parent">
							MENA
							<div class="pop-up">
								<div class="content">
									<p class="text">Middle East &amp; North Africa</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
						</a>
						<a href="#" data-target="afr" class="filter active region region-afr popup-parent">
							AFR
							<div class="pop-up">
								<div class="content">
									<p class="text">Africa</p>
								</div>
								<div class="row2 arrow">
									<div class="arrow-down"></div>
								</div>
							</div>
						</a>
					</div>
				</div><!-- /#filter-wrapper -->
			</div><!-- /.middle -->
			<div class="right">
				<div class="buttons" id="toolbar-btns">
					<a href="#" data-toggle-target="e-part" data-title="Digital Citizens" class="button popup-parent active e-part">
						<div class="pop-up">
							<div class="content">
								<p class="text">Digital Citizens</p>
							</div>
							<div class="row2 arrow">
								<div class="arrow-down"></div>
							</div>
						</div>
						<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/e-participation-toolbar.png" alt="e-participation" />
					</a>
					<a href="#" data-toggle-target="e-tra" data-title="E-Transparency" class="button popup-parent active e-tra">
						<div class="pop-up">
							<div class="content">
								<p class="text">E-Transparency</p>
							</div>
							<div class="row2 arrow">
								<div class="arrow-down"></div>
							</div>
						</div>
						<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/e-transparency-toolbar.png" alt="e-transparency" />
					</a>
					<a href="#" data-toggle-target="bud-tra" data-title="Budget Transparency" class="button popup-parent active bud-tra">
						<div class="pop-up">
							<div class="content">
								<p class="text">Budget Transparency</p>
							</div>
							<div class="row2 arrow">
								<div class="arrow-down"></div>
							</div>
						</div>
						<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/budget-transparency-toolbar.png" alt="budget-transparency" />
					</a>
					<a href="#" data-toggle-target="tra-open" data-title="Trade Openness" class="button popup-parent active tra-open">
						<div class="pop-up">
							<div class="content">
								<p class="text">Trade Openness</p>
							</div>
							<div class="row2 arrow">
								<div class="arrow-down"></div>
							</div>
						</div>
						<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/trade-openness-toolbar.png" alt="trade-openness" />
					</a>
					<a href="#" data-toggle-target="adm-sim" data-title="Administrative Simplicity" class="button popup-parent active adm-sim">
						<div class="pop-up">
							<div class="content">
								<p class="text">Administrative Simplicity</p>
							</div>
							<div class="row2 arrow">
								<div class="arrow-down"></div>
							</div>
						</div>
						<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/administrative-simplicity-toolbar.png" alt="administrative-simplicity" />
					</a>
					<a href="#" data-toggle-target="jud-ind" data-title="Judicial Independence" class="button popup-parent active jud-ind first">
						<div class="pop-up">
							<div class="content">
								<p class="text">Judicial Independance</p>
							</div>
							<div class="row2 arrow">
								<div class="arrow-down"></div>
							</div>
						</div>
						<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/judicial-independence-toolbar.png" alt="judicial-independence" />
					</a>
				</div>
				<!-- <div class="switch-wrapper popup-parent">
					<div class="pop-up">
						<div class="content">
							<p class="text"></p>
						</div>
						<div class="row2 arrow">
							<div class="arrow-down"></div>
						</div>
					</div>
					<input type="checkbox" name="toggle" id="toggle">
					<label for="toggle"></label>
				</div> -->
			</div>
		</div><!-- /.toolbar -->
	</div>
</section>
<!-- ///////////////////// toolbar ends ///////////////////// -->

<!-- ///////////////////// country-info starts ///////////////////// -->

<div id="downloadify"></div>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/swfobject.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/downloadify.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/jspdf.js"></script>

<script type="text/javascript">
function downloadPdf(){
		Downloadify.create("downloadify",{
			filename: "Simple.pdf",
			data: function()
			{ 
					var doc = new jsPDF();
					doc.setFontSize(22);
					doc.text(20, 20, "My First PDF");
					doc.addPage();
					doc.setFontSize(16);
					doc.text(20, 30, "This is some normal sized text underneath.");	
				return doc.output();

			},
			onComplete: function(){ alert("Your File Has Been Saved!"); },
			onCancel: function(){ alert("You have cancelled the saving of this file."); },
			onError: function(){ alert("You must put something in the File Contents or there will be nothing to save!"); },
			downloadImage: "images/download.png",
			swf: "images/downloadify.swf",
			width: 100,
			height: 30,
			transparent: true,
			append: false
		});
	}
</script>
<section class="row2 country-info" id="country-info">

		<div class="row2 trans-5">
			<div class="row">
				<div class="col-xs-12">
					<div class="chart" id="chart">
					
					
					
					
					
					</div><!-- /.chart#chart -->
				</div><!-- /.col-xs-12 -->
			</div><!-- /.row -->
		</div><!-- /.trans-5 -->
</section>
<!-- ///////////////////// country-info ends ///////////////////// -->

							</div>
							
							<?php// get_sidebar('sidebar2'); // sidebar 2 ?>
													
						</section> <!-- end article header -->
						
						<footer>
			
							<p class="clearfix"><?php the_tags('<span class="tags">' . __("Tags","wpbootstrap") . ': ', ', ', '</span>'); ?></p>
							
						</footer> <!-- end article footer -->
					
					
					
			
				</div> <!-- end #main -->
    
				
    
			</div> <!-- end #content -->

<?php get_footer(); ?>
