<?php
/*
Template Name: country-profile
*/
?>

<?php get_header(); ?>
			
			<div id="content" class="clearfix row">
			
				<div id="main" class="col-sm-12 clearfix" role="main">

					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					
					<article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">
					
						<header>

							<?php 
								$post_thumbnail_id = get_post_thumbnail_id();
								$featured_src = wp_get_attachment_image_src( $post_thumbnail_id, 'wpbs-featured-home' );
							?>

							
						</header>
						
						<section class="row post_content">
						
							<div class="col-sm-12">
						
								<?php //the_content(); ?>
								<section class="main country-profile">

<div class="row2 country-name-row">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 country-name">
				<h1><img class="countryflag" src="<?php bloginfo('stylesheet_directory'); ?>/img/cont/flags/Bosnia and Herzegovina.jpg" alt="Bosnia and Herzegovina" /><span class="countryname">Bosnia and Herzegovina</span></h1>
			</div>
			<div class="row2 blue-row"></div>
		</div>
	</div>
</div>

<div class="row2 main-content">
	<div class="container">
		<div class="row2 top-content">
			<div class="row">
				<div class="col-xs-12 col-md-5 left">
					<div class="content" id="polygon-chart">
						<svg class="polygon" id="polygon">
							<!-- example 1 -->
							<defs>
							    <clipPath id="jud-ind-mask">
							    	<path />
							    </clipPath>
							</defs>
							<defs>
							    <clipPath id="adm-sim-mask">
							    	<path />
							    </clipPath>
							</defs>
							<defs>
							    <clipPath id="tra-open-mask">
							    	<path />
							    </clipPath>
							</defs>
							<defs>
							    <clipPath id="bud-tra-mask">
							    	<path />
							    </clipPath>
							</defs>
							<defs>
							    <clipPath id="e-tra-mask">
							    	<path />
							    </clipPath>
							</defs>
							<defs>
							    <clipPath id="e-part-mask">
							    	<path />
							    </clipPath>
							</defs>

							<polygon class="component-color jud-ind" data-target="jud-ind-icon" clip-path="url(#jud-ind)" />
							<rect class="component-color adm-sim" data-target="adm-sim-icon" clip-path="url(#adm-sim)" />
							<polygon class="component-color tra-open" data-target="tra-open-icon" clip-path="url(#tra-open)" />
							<polygon class="component-color bud-tra" data-target="bud-tra-icon" clip-path="url(#bud-tra)" />
							<rect class="component-color e-tra" data-target="e-tra-icon" clip-path="url(#e-tra)" />
							<polygon class="component-color e-part" data-target="e-part-icon" clip-path="url(#e-part)" />

							<line class="score-line overall jud-ind-overall" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line regional jud-ind-regional" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line income jud-ind-income" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line overall adm-sim-overall" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line regional adm-sim-regional" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line income adm-sim-income" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line overall tra-open-overall" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line regional tra-open-regional" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line income tra-open-income" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line overall bud-tra-overall" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line regional bud-tra-regional" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line income bud-tra-income" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line overall e-tra-overall" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line regional e-tra-regional" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line income e-tra-income" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line overall e-part-overall" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line regional e-part-regional" fill="none" stroke-width="3" stroke="#404f6c" />
							<line class="score-line income e-part-income" fill="none" stroke-width="3" stroke="#404f6c" />


							<path class="jud-ind-border" fill="none" stroke-width="1" stroke="#898989" />
							<path class="adm-sim-border" fill="none" stroke-width="1" stroke="#898989" />
							<path class="tra-open-border" fill="none" stroke-width="1" stroke="#898989" />
							<path class="bud-tra-border" fill="none" stroke-width="1" stroke="#898989" />
							<path class="e-tra-border" fill="none" stroke-width="1" stroke="#898989" />
							<path class="e-part-border" fill="none" stroke-width="1" stroke="#898989" />

							<g class="jud-ind">
								<ellipse  rx="15" ry="15" cx="129" cy="" fill="#fff" stroke-width="1" />
								<text x="" y="" fill="#333" text-anchor="middle"></text>
							</g>
							<g class="adm-sim">
								<ellipse  rx="15" ry="15" cx="" cy="150" fill="#fff" stroke-width="1" />
								<text x="" y="" fill="#333" text-anchor="middle"></text>
							</g>
							<g class="tra-open">
								<ellipse  rx="15" ry="15" cx="129" cy="" fill="#fff" stroke-width="1" />
								<text x="" y="" fill="#333" text-anchor="middle"></text>
							</g>
							<g class="bud-tra">
								<ellipse  rx="15" ry="15" cx="129" cy="" fill="#fff" stroke-width="1" />
								<text x="" y="" fill="#333" text-anchor="middle"></text>
							</g>
							<g class="e-tra">
								<ellipse  rx="15" ry="15" cx="" cy="150" fill="#fff" stroke-width="1" />
								<text x="" y="" fill="#333" text-anchor="middle"></text>
							</g>
							<g class="e-part">
								<ellipse  rx="15" ry="15" cx="129" cy="" fill="#fff" stroke-width="1" />
								<text x="" y="" fill="#333" text-anchor="middle"></text>
							</g>

							<g class="component-icn jud-ind-icon">
								<ellipse rx="20" ry="20" cx="214" cy="4" fill="#5fb09f" stroke="" stroke-width=""/>
								<image x="194" y="-16" width="40" height="40" xlink:href="<?php bloginfo('stylesheet_directory'); ?>/img/icn/judicial-independence-transparent.png" />
							</g>
							<g class="component-icn adm-sim-icon">
								<ellipse rx="20" ry="20" cx="298" cy="150" fill="#ffb28b" stroke="" stroke-width=""/>
								<image x="278" y="132" width="40" height="40" xlink:href="<?php bloginfo('stylesheet_directory'); ?>/img/icn/administrative-simplicity-transparent.png" />
							</g>
							<g class="component-icn tra-open-icon">
								<ellipse rx="20" ry="20" cx="213" cy="295" fill="#6db6d7" stroke="" stroke-width=""/>
								<image x="193" y="276" width="40" height="40" xlink:href="<?php bloginfo('stylesheet_directory'); ?>/img/icn/trade-openness-transparent.png" />
							</g>
							<g class="component-icn bud-tra-icon">
								<ellipse rx="20" ry="20" cx="45" cy="295" fill="#e2bd62" stroke="" stroke-width=""/>
								<image x="25" y="276" width="40" height="40" xlink:href="<?php bloginfo('stylesheet_directory'); ?>/img/icn/budget-transparency-transparent.png" />
							</g>
							<g class="component-icn e-tra-icon">
								<ellipse rx="20" ry="20" cx="-39" cy="150" fill="#e08dd1" stroke="" stroke-width=""/>
								<image x="-59" y="130" width="40" height="40" xlink:href="<?php bloginfo('stylesheet_directory'); ?>/img/icn/e-transparency-transparent.png" />
							</g>
							<g class="component-icn e-part-icon">
								<ellipse rx="20" ry="20" cx="45" cy="4" fill="#958fcd" stroke="" stroke-width=""/>
								<image x="25" y="-16" width="40" height="40" xlink:href="<?php bloginfo('stylesheet_directory'); ?>/img/icn/e-participation-transparent.png" />
							</g>

							<polygon class="center-poly" fill="#a23a45" stroke="#fff" stroke-width="2" />
							<g class="centertext">
								<text class="top" x="129" y="145" text-anchor="middle" fill="#fff">IPI</text>
								<text class="ipi" x="129" y="160" text-anchor="middle" fill="#fff"></text>
							</g>

						</svg>
						<div class="row2 btn-wrapper">
							<a href="#" class="btn-blue active" data-toggle="overall">Overall</a>
							<a href="#" class="btn-blue" data-toggle="regional">Regional</a>
							<a href="#" class="btn-blue" data-toggle="income">Income Group</a>
						</div>
					</div>
				</div><!-- /.left -->
				<div class="col-xs-12 col-md-7 right">
					<div class="row2 content">
						<div class="row">
							<div class="col-xs-12 col-md-4 ipi-total">
								<div class="row2 ipi-score">
									<p class="total dark">IPI Total Score</p>
									<div class="row2">
										<p class="ipi-logo"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/cont/ipi-toolbar.png" alt="Total IPI" /></p>
										<p class="score" id="totalIpi">65</p>
									</div>
									<div class="row2 text">
										<p><span class="fw400 dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate</span>, nemo distinctio in aspernatur reiciendis, vel consequuntur officiis, cum quisquam aliquid. Maxime quo reiciendis.</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates unde, corporis nulla.</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
									</div>
								</div>
							</div><!-- /.col-md-4 -->
							<div class="col-xs-12 col-md-8 rank-table">
								<p class="country-rank">Country Rank</p>
								<p class="rank" id="countryRank">58<span>/ 90</span></p>
								<table class="table table-bordered country-score" ng-controller="ComponentsController as country">
									<tr>
										<th colspan="2">
											<div class="block component-th">Components</div>
										</th>
										<th>
											<div class="block">Component <span>Score</span></div>
										</th>
										<th>
											<div class="block">Component <span>Rank</span></div>
										</th>
									</tr>
									<tr>
										<td class="component-name">
											<div class="block jud-ind-bg">Judicial Independance</div>
										</td>
										<td class="component-icon">
											<div class="block jud-ind-bg">
												<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/judicial-independence-toolbar.png" />
											</div>
										</td>
										<td><div class="block">{{ country.country['Judicial Independence']['country_score'] }}</div></td>
										<td><div class="block">{{ country.country['Judicial Independence']['rank'] }}</div></td>
									</tr>
									<tr>
										<td class="component-name">
											<div class="block adm-sim-bg">Administrative Simplicity</div>
										</td>
										<td class="component-icon">
											<div class="block adm-sim-bg">
												<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/administrative-simplicity-toolbar.png" />
											</div>
										</td>
										<td><div class="block">{{ country.country['Administrative Simplicity']['country_score'] }}</div></td>
										<td><div class="block">{{ country.country['Administrative Simplicity']['rank'] }}</div></td>
									</tr>
									<tr>
										<td class="component-name">
											<div class="block tra-open-bg">Trade Openness</div>
										</td>
										<td class="component-icon">
											<div class="block tra-open-bg">
												<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/trade-openness-toolbar.png" />
											</div>
										</td>
										<td><div class="block">{{ country.country['Trade Openness']['country_score'] }}</div></td>
										<td><div class="block">{{ country.country['Trade Openness']['rank'] }}</div></td>
									</tr>
									<tr>
										<td class="component-name">
											<div class="block bud-tra-bg">Budget Transparency</div>
										</td>
										<td class="component-icon">
											<div class="block bud-tra-bg">
												<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/budget-transparency-toolbar.png" />
											</div>
										</td>
										<td><div class="block">{{ country.country['Budget Transparency']['country_score'] }}</div></td>
										<td><div class="block">{{ country.country['Budget Transparency']['rank'] }}</div></td>
									</tr>
									<tr>
										<td class="component-name">
											<div class="block e-tra-bg">E-Transparency</div>
										</td>
										<td class="component-icon">
											<div class="block e-tra-bg">
												<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/e-transparency-toolbar.png" />
											</div>
										</td>
										<td><div class="block">{{ country.country['E-Transparency']['country_score'] }}</div></td>
										<td><div class="block">{{ country.country['E-Transparency']['rank'] }}</div></td>
									</tr>
									<tr>
										<td class="component-name">
											<div class="block e-part-bg">Digital Citizens</div>
										</td>
										<td class="component-icon">
											<div class="block e-part-bg">
												<img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/e-participation-toolbar.png" />
											</div>
										</td>
										<td><div class="block">{{ country.country['Digital Citizens']['country_score'] }}</div></td>
										<td><div class="block">{{ country.country['Digital Citizens']['rank'] }}</div></td>
									</tr>
								</table>
							</div><!-- /.rank-table -->
						</div><!-- /.row -->
					</div>
				</div><!-- /.right -->
			</div><!-- /.row -->
		</div>
	</div><!-- /.container -->
</div><!-- /.main-content -->

<div class="row2 facts">
	<div class="container">
		<div class="content">
			<div class="row">
				<div class="col-xs-12">
					<h2 class="country-facts-title"><span class="countryname">Bosnia and Harzegovina</span> Facts</h2>
				</div>
				<div class="col-xs-12 col-md-7 text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit amet saepe. Nam vitae cupiditate voluptatem, at voluptates voluptas! Quaerat doloremque eveniet aperiam quae iure ducimus sapiente obcaecati dolore. Dolorum voluptas, natus accusantium nesciunt facere assumenda quas quod enim maiores iusto excepturi. Delectus magnam, repellendus aliquid unde distinctio.
					</p>
					<p>
						Quaerat doloremque eveniet aperiam quae iure ducimus sapiente obcaecati dolore. Dolorum voluptas, natus accusantium nesciunt facere assumenda quas quod enim maiores iusto excepturi., consectetur adipisicing elit. Asperiores modi fugiat vitae doloribus consequuntur, inventore atque blanditiis reprehenderit, dolores ratione, adipisci! Aperiam ut repudiandae rem earum maxime dignissimos ex, recusandae sed totam, doloribus quibusdam ducimus, omnis consequuntur aliquid quidem dolorum ad possimus illum cupiditate ullam rerum dolore eligendi perspiciatis natus. A adipisci laudantium pariatur officia neque consequuntur minus, perspiciatis hic!
					</p>
					<p>
						Asperiores modi fugiat vitae doloribus consequuntur, inventore atque blanditiis reprehenderit, dolores ratione consectetur adipisicing
					</p>
				</div>
				<div class="col-xs-12 col-md-5 facts-table-col">
					<p class="other-details">Country other details -
						<span>dummy text - 2015 natus accusantium nesciunt facere </span>
					</p>
					<table class="table-bordered" ng-controller="OtherdataController as country">
						<tr>
							<th>GNI per capita, PPP (current international $)</th>
							<td>{{country.country.FIELD3}}</td>
						</tr>
						<tr>
							<th>Population, total</th>
							<td>{{country.country.FIELD4}}</td>
						</tr>
						<tr>
							<th>Urban population (% of total)</th>
							<td>{{country.country.FIELD5}}</td>
						</tr>
						<tr>
							<th>Internet users (per 100 people)</th>
							<td>{{country.country.FIELD6}}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="row2 component-comparison">
	<div class="container">
		<div class="content">
			<div class="row">
				<h2 class="comparison-title">Component Comparison</h2>
			</div>
			<div class="row">
				<div class="col-xs-12 col-md-4 comparison-table-holder">
					<table class="table table-bordered comparison-table jud-ind">
						<tr class="tr">
							<th class="jud-ind-bg icon-td" rowspan="2"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/judicial-independence-toolbar.png" /></th>
							<th class="jud-ind-bg small-th" colspan="3">Judicial Independence</th>
						</tr>
						<tr>
							<td class="jud-ind-bg-2 small-th component-rank" colspan="4">Rank 15/90</td>
						</tr>
						<tr>
							<td class="jud-ind-bg-3" colspan="2">Country Score</td>
							<td class="jud-ind-bg-3 graph country_score" colspan="2"><div class="jud-ind-bg"></div></td>
						</tr>
						<tr>
							<td class="jud-ind-bg-3" colspan="2">World Everage</td>
							<td class="jud-ind-bg-3 graph world_everage" colspan="2"><div class="jud-ind-bg"></div></td>
						</tr>
						<tr>
							<td class="jud-ind-bg-3" colspan="2">Income Group Everage</td>
							<td class="jud-ind-bg-3 graph income_group_everage" colspan="2"><div class="jud-ind-bg"></div></td>
						</tr>
						<tr>
							<td class="jud-ind-bg-3" colspan="2">Regional Everage</td>
							<td class="jud-ind-bg-3 graph regional_everage" colspan="2"><div class="jud-ind-bg"></div></td>
						</tr>
					</table>
				</div>
				<div class="col-xs-12 col-md-4 comparison-table-holder">
					<table class="table table-bordered comparison-table tra-open">
						<tr class="tr">
							<th class="tra-open-bg icon-td" rowspan="2"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/trade-openness-toolbar.png" /></th>
							<th class="tra-open-bg small-th" colspan="3">Trade Openness</th>
						</tr>
						<tr>
							<td class="tra-open-bg-2 small-th component-rank" colspan="4">Rank 15/90</td>
						</tr>
						<tr>
							<td class="tra-open-bg-3" colspan="2">Country Score</td>
							<td class="tra-open-bg-3 graph country_score" colspan="2"><div class="tra-open-bg"></div></td>
						</tr>
						<tr>
							<td class="tra-open-bg-3" colspan="2">World Everage</td>
							<td class="tra-open-bg-3 graph world_everage" colspan="2"><div class="tra-open-bg"></div></td>
						</tr>
						<tr>
							<td class="tra-open-bg-3" colspan="2">Income Group Everage</td>
							<td class="tra-open-bg-3 graph income_group_everage" colspan="2"><div class="tra-open-bg"></div></td>
						</tr>
						<tr>
							<td class="tra-open-bg-3" colspan="2">Regional Everage</td>
							<td class="tra-open-bg-3 graph regional_everage" colspan="2"><div class="tra-open-bg"></div></td>
						</tr>
					</table>
				</div>
				<div class="col-xs-12 col-md-4 comparison-table-holder">
					<table class="table table-bordered comparison-table e-tra">
						<tr class="tr">
							<th class="e-tra-bg icon-td" rowspan="2"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/e-transparency-toolbar.png" /></th>
							<th class="e-tra-bg small-th" colspan="3">E-Transparency</th>
						</tr>
						<tr>
							<td class="e-tra-bg-2 small-th component-rank" colspan="4">Rank 15/90</td>
						</tr>
						<tr>
							<td class="e-tra-bg-3" colspan="2">Country Score</td>
							<td class="e-tra-bg-3 graph country_score" colspan="2"><div class="e-tra-bg"></div></td>
						</tr>
						<tr>
							<td class="e-tra-bg-3" colspan="2">World Everage</td>
							<td class="e-tra-bg-3 graph world_everage" colspan="2"><div class="e-tra-bg"></div></td>
						</tr>
						<tr>
							<td class="e-tra-bg-3" colspan="2">Income Group Everage</td>
							<td class="e-tra-bg-3 graph income_group_everage" colspan="2"><div class="e-tra-bg"></div></td>
						</tr>
						<tr>
							<td class="e-tra-bg-3" colspan="2">Regional Everage</td>
							<td class="e-tra-bg-3 graph regional_everage" colspan="2"><div class="e-tra-bg"></div></td>
						</tr>
					</table>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-md-4 comparison-table-holder">
					<table class="table table-bordered comparison-table adm-sim">
						<tr class="tr">
							<th class="adm-sim-bg icon-td" rowspan="2"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/administrative-simplicity-toolbar.png" /></th>
							<th class="adm-sim-bg small-th" colspan="3">Administrative Simplicity</th>
						</tr>
						<tr>
							<td class="adm-sim-bg-2 small-th component-rank" colspan="4">Rank 15/90</td>
						</tr>
						<tr>
							<td class="adm-sim-bg-3" colspan="2">Country Score</td>
							<td class="adm-sim-bg-3 graph country_score" colspan="2"><div class="adm-sim-bg"></div></td>
						</tr>
						<tr>
							<td class="adm-sim-bg-3" colspan="2">World Everage</td>
							<td class="adm-sim-bg-3 graph world_everage" colspan="2"><div class="adm-sim-bg"></div></td>
						</tr>
						<tr>
							<td class="adm-sim-bg-3" colspan="2">Income Group Everage</td>
							<td class="adm-sim-bg-3 graph income_group_everage" colspan="2"><div class="adm-sim-bg"></div></td>
						</tr>
						<tr>
							<td class="adm-sim-bg-3" colspan="2">Regional Everage</td>
							<td class="adm-sim-bg-3 graph regional_everage" colspan="2"><div class="adm-sim-bg"></div></td>
						</tr>
					</table>
				</div>
				<div class="col-xs-12 col-md-4 comparison-table-holder">
					<table class="table table-bordered comparison-table bud-tra">
						<tr class="tr">
							<th class="bud-tra-bg icon-td" rowspan="2"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/budget-transparency-toolbar.png" /></th>
							<th class="bud-tra-bg small-th" colspan="3">Budget Transparency</th>
						</tr>
						<tr>
							<td class="bud-tra-bg-2 small-th component-rank" colspan="4">Rank 15/90</td>
						</tr>
						<tr>
							<td class="bud-tra-bg-3 small-th" colspan="2">Country Score</td>
							<td class="bud-tra-bg-3 graph country_score" colspan="2"><div class="bud-tra-bg"></div></td>
						</tr>
						<tr>
							<td class="bud-tra-bg-3" colspan="2">World Everage</td>
							<td class="bud-tra-bg-3 graph world_everage" colspan="2"><div class="bud-tra-bg"></div></td>
						</tr>
						<tr>
							<td class="bud-tra-bg-3" colspan="2">Income Group Everage</td>
							<td class="bud-tra-bg-3 graph income_group_everage" colspan="2"><div class="bud-tra-bg"></div></td>
						</tr>
						<tr>
							<td class="bud-tra-bg-3" colspan="2">Regional Everage</td>
							<td class="bud-tra-bg-3 graph regional_everage" colspan="2"><div class="bud-tra-bg"></div></td>
						</tr>
					</table>
				</div>
				<div class="col-xs-12 col-md-4 comparison-table-holder">
					<table class="table table-bordered comparison-table e-part">
						<tr class="tr">
							<th class="e-part-bg icon-td" rowspan="2"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/e-participation-toolbar.png" /></th>
							<th class="e-part-bg small-th" colspan="3">Digital Citizens</th>
						</tr>
						<tr>
							<td class="e-part-bg-2 small-th component-rank" colspan="4">Rank 15/90</td>
						</tr>
						<tr>
							<td class="e-part-bg-3" colspan="2">Country Score</td>
							<td class="e-part-bg-3 graph country_score" colspan="2"><div class="e-part-bg"></div></td>
						</tr>
						<tr>
							<td class="e-part-bg-3" colspan="2">World Everage</td>
							<td class="e-part-bg-3 graph world_everage" colspan="2"><div class="e-part-bg"></div></td>
						</tr>
						<tr>
							<td class="e-part-bg-3" colspan="2">Income Group Everage</td>
							<td class="e-part-bg-3 graph income_group_everage" colspan="2"><div class="e-part-bg"></div></td>
						</tr>
						<tr>
							<td class="e-part-bg-3" colspan="2">Regional Everage</td>
							<td class="e-part-bg-3 graph regional_everage" colspan="2"><div class="e-part-bg"></div></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="row2 facts policy">
	<div class="container">
		<div class="content">
			<div class="row">
				<div class="col-xs-12">
					<h2 class="country-facts-title">Policy Recommendations</h2>
				</div>
				<div class="col-xs-12 col-md-6 text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit amet saepe. Nam vitae cupiditate voluptatem, at voluptates voluptas! Quaerat doloremque eveniet aperiam quae iure ducimus sapiente obcaecati dolore.
					</p>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
						
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, magnam atque optio!</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores animi soluta, quos amet deleniti nulla nobis unde.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et libero laboriosam at ducimus, aliquam quos ullam possimus maiores. Blanditiis praesentium in, modi non assumenda dolorum laboriosam enim qui.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores animi soluta, quos amet deleniti nulla nobis unde.</li>
					</ul>
				</div>
				<div class="col-xs-12 col-md-6 text">
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cum beatae, enim distinctio possimus.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							<ul>
								<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sunt, amet at.</li>
								<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam.</li>
							</ul>
						</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, magnam atque optio!</li>
					</ul>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit doloremque earum, nisi. Non.</p>
					<p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit doloremque earum, nisi. Non. sit amet, consectetur doloremque earum, ipsum dolor sit amet, consectetur adipisicing elitnisi. Non.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="row2">
	<div class="container">
		<div class="row2 blue-row"></div>
	</div>
</div>

<!-- <div class="row2 footer">
	<div class="container">
		<div class="row2 content">
			<div class="row">
				<div class="col-xs-12 col-md-4">
					<div class="icon jud-ind-bg"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/judicial-independence-toolbar.png" /></div>
					<div class="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dignissimos voluptate minus blanditiis quia voluptatem labore amet, id harum, quo omnis aliquid modi assumenda.</p>
					</div>
				</div>
				<div class="col-xs-12 col-md-4">
					<div class="icon tra-open-bg"><img src="img/icn/trade-openness-toolbar.png" /></div>
					<div class="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cum, explicabo, magni dicta sit iste modi illum rem beatae et molestiae voluptas quod repellat nobis natus repellendus unde.</p>
					</div>
				</div>
				<div class="col-xs-12 col-md-4">
					<div class="icon e-tra-bg"><img src="img/icn/e-transparency-toolbar.png" /></div>
					<div class="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio rem, ipsum consectetur possimus. Quasi, dolores iure autem facilis possimus officia nisi recusandae alias, quia magni nostrum neque nihil!</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-md-4">
					<div class="icon adm-sim-bg"><img src="img/icn/administrative-simplicity-toolbar.png" /></div>
					<div class="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum corporis, odio quia amet, neque tempora in dolores aliquid, voluptates laudantium atque consequatur, accusamus cumque, magnam!</p>
					</div>
				</div>
				<div class="col-xs-12 col-md-4">
					<div class="icon bud-tra-bg"><img src="img/icn/budget-transparency-toolbar.png"></div>
					<div class="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae rerum nulla deleniti tempore est voluptatum similique fugiat magni provident odit, assumenda cumque esse, libero minus consectetur!</p>
					</div>
				</div>
				<div class="col-xs-12 col-md-4">
					<div class="icon e-part-bg"><img src="<?php bloginfo('stylesheet_directory'); ?>/img/icn/digital-citizens-toolbar.png" /></div>
					<div class="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia hic itaque sunt fuga id modi, quam labore deleniti, qui, accusantium dolores enim odio incidunt nihil quia nostrum blanditiis?</p>
					</div>
				</div>
			</div>
		</div>
		<div class="row2 baseline"></div>
	</div>
</div> -->

</section>
							</div>
							
							<?php// get_sidebar('sidebar2'); // sidebar 2 ?>
													
						</section> <!-- end article header -->
						
						<footer>
			
							<p class="clearfix"><?php the_tags('<span class="tags">' . __("Tags","wpbootstrap") . ': ', ', ', '</span>'); ?></p>
							
						</footer> <!-- end article footer -->
					
					</article> <!-- end article -->
					
					<?php 
						// No comments on homepage
						//comments_template();
					?>
					
					<?php endwhile; ?>	
					
					<?php else : ?>
					
					<article id="post-not-found">
					    <header>
					    	<h1><?php _e("Not Found", "wpbootstrap"); ?></h1>
					    </header>
					    <section class="post_content">
					    	<p><?php _e("Sorry, but the requested resource was not found on this site.", "wpbootstrap"); ?></p>
					    </section>
					    <footer>
					    </footer>
					</article>
					
					<?php endif; ?>
			
				</div> <!-- end #main -->
    
				<?php //get_sidebar(); // sidebar 1 ?>
    
			</div> <!-- end #content -->

<?php get_footer(); ?>
