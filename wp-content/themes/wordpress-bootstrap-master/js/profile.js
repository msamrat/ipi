(function() {
'use strict';

var url = window.location.search.replace("?", "").split('='),
	polyWrapper = d3.select('#polygon-chart'),
	svg = polyWrapper.select('svg#polygon'),
	wWidth = window.innerWidth,
	polyBtn = polyWrapper.selectAll('.btn-blue'),
	componentColor = svg.selectAll('.component-color'),
	profileData,
	otherData,
	w,
	h,
	xScale,
	yScale,
	zScale,
	country,
	id;

if (url[0] === 'id' && typeof +url[1] === 'number') { var id = url[1] || 1; }; // getting id

country = data[id]; // selecting country from data
profileData = countrydata[id];
otherData = countryOtherData[id];

// setting w and h
if (wWidth > 300) {
	w = 129;
	h = 150;
	xScale = d3.scale.linear().domain([0, 10]).range([35, 260]);
	yScale = d3.scale.linear().domain([0, 10]).range([35, 150]);
	zScale = d3.scale.linear().domain([0, 10]).range([35, 129]);

	renderPage();

	renderPlygon();

	chartsRender();
};

function renderPlygon() {
	var poly1 = {'y': h - yScale(+country['Judicial Independence']), 'x': w + xScale(+country['Judicial Independence']), 'z': h - zScale(+country['Judicial Independence'])},
		rect1 = {'y': 0, 'x': w, 'width': zScale(+country['Administrative Simplicity']), 'height': h * 2, 'z': w + zScale(+country['Administrative Simplicity'])},
		poly3 = {'y': h + yScale(+country['Trade Openness']), 'x': w + xScale(+country['Trade Openness']), 'z': h - zScale(+country['Trade Openness'])},
		poly4 = {'y': h + yScale(+country['Budget Transparency']), 'x': w - xScale(+country['Budget Transparency']), 'z': h - zScale(+country['Budget Transparency'])},
		rect2 = {'y': 0, 'x': w - zScale(+country['E-Transparency']), 'width': zScale(+country['E-Transparency']), 'height': h * 2, 'z': w - zScale(+country['E-Transparency'])},
		poly6 = {'y': h - yScale(+country['Digital Citizens']), 'x': w - xScale(+country['Digital Citizens']), 'z': h - zScale(+country['Digital Citizens'])};

	// first step - setting paths in masks
	svg.select('#jud-ind-mask path').attr("d",'M129,0 L129,150 L259.904,75 Z');
	svg.select('#adm-sim-mask path').attr("d","M259.904,75 L129,150 L259.856,225.084 Z");
	svg.select('#tra-open-mask path').attr("d","M259.856,225.084 L129,150 L129,300 Z");
	svg.select('#bud-tra-mask path').attr("d","M129,300 L129,150 L0,225.084 Z");
	svg.select('#e-tra-mask path').attr("d","M0,225.084 L129,150 L0,75 Z");
	svg.select('#e-part-mask path').attr("d","M0,75 L129,150 L129,0 Z");

	// setting color polygons and rects
	svg.select('polygon.jud-ind').attr('points', w + ',' + poly1.y + ' ' + w + ',' + h + ' ' + poly1.x + ',' + h).attr('clip-path', 'url(#jud-ind-mask)');
	svg.select('rect.adm-sim').attr({'x': rect1.x, 'y': rect1.y, 'width': rect1.width, 'height': rect1.height}).attr('clip-path', 'url(#adm-sim-mask)');
	svg.select('polygon.tra-open').attr('points', '' + w + ',' + poly3.y + ' ' + w + ',' + h + ' ' + poly3.x + ',' + h).attr('clip-path', 'url(#tra-open-mask)');
	svg.select('polygon.bud-tra').attr('points', '' + w + ',' + poly4.y + ' ' + w + ',' + h + ' ' + poly4.x + ',' + h).attr('clip-path', 'url(#bud-tra-mask)');
	svg.select('rect.e-tra').attr({'x': rect2.x, 'y': rect2.y, 'width': rect2.width, 'height': rect2.height}).attr('clip-path', 'url(#e-tra-mask)');
	svg.select('polygon.e-part').attr('points', '' + w + ',' + poly6.y + ' ' + w + ',' + h + ' ' + poly6.x + ',' + h).attr('clip-path', 'url(#e-part-mask)');

	// setting border
	svg.select('.jud-ind-border').attr("d", 'M129,0 L129,150 L259.904,75 Z');
	svg.select('.adm-sim-border').attr("d","M259.904,75 L129,150 L259.856,225.084 Z");
	svg.select('.tra-open-border').attr("d","M259.856,225.084 L129,150 L129,300 Z");
	svg.select('.bud-tra-border').attr("d","M129,300 L129,150 L0,225.084 Z");
	svg.select('.e-tra-border').attr("d","M0,225.084 L129,150 L0,75 Z");
	svg.select('.e-part-border').attr("d","M0,75 L129,150 L129,0 Z");

	// rendering lines
	svg.select('.jud-ind-overall').attr({'x1': w, 'y1': h - yScale(+profileData['Judicial Independence']['world_everage']), 'x2': w + xScale(+profileData['Judicial Independence']['world_everage']), 'y2': h}).attr('clip-path', 'url(#jud-ind-mask)');
	svg.select('.jud-ind-regional').attr({'x1': w, 'y1': h - yScale(+profileData['Judicial Independence']['regional_everage']), 'x2': w + xScale(+profileData['Judicial Independence']['regional_everage']), 'y2': h}).attr('clip-path', 'url(#jud-ind-mask)');
	svg.select('.jud-ind-income').attr({'x1': w, 'y1': h - yScale(+profileData['Judicial Independence']['income_group_everage']), 'x2': w + xScale(+profileData['Judicial Independence']['income_group_everage']), 'y2': h}).attr('clip-path', 'url(#jud-ind-mask)');
	svg.select('.adm-sim-overall').attr({'x1': w + zScale(+profileData['Administrative Simplicity']['world_everage']), 'y1': 0, 'x2': w + zScale(+profileData['Administrative Simplicity']['world_everage']), 'y2': h * 2}).attr('clip-path', 'url(#adm-sim-mask)');
	svg.select('.adm-sim-regional').attr({'x1': w + zScale(+profileData['Administrative Simplicity']['regional_everage']), 'y1': 0, 'x2': w + zScale(+profileData['Administrative Simplicity']['regional_everage']), 'y2': h * 2}).attr('clip-path', 'url(#adm-sim-mask)');
	svg.select('.adm-sim-income').attr({'x1': w + zScale(+profileData['Administrative Simplicity']['income_group_everage']), 'y1': 0, 'x2': w + zScale(+profileData['Administrative Simplicity']['income_group_everage']), 'y2': h * 2}).attr('clip-path', 'url(#adm-sim-mask)');
	svg.select('.tra-open-overall').attr({'x1': w, 'y1': h + yScale(+profileData['Trade Openness']['world_everage']), 'x2': w + xScale(+profileData['Trade Openness']['world_everage']), 'y2': h}).attr('clip-path', 'url(#tra-open-mask)');
	svg.select('.tra-open-regional').attr({'x1': w , 'y1': h + yScale(+profileData['Trade Openness']['regional_everage']), 'x2': w + xScale(+profileData['Trade Openness']['regional_everage']), 'y2': h}).attr('clip-path', 'url(#tra-open-mask)');
	svg.select('.tra-open-income').attr({'x1': w , 'y1': h + yScale(+profileData['Trade Openness']['income_group_everage']), 'x2': w + xScale(+profileData['Trade Openness']['income_group_everage']), 'y2': h}).attr('clip-path', 'url(#tra-open-mask)');
	svg.select('.bud-tra-overall').attr({'x1': w, 'y1': h + yScale(+profileData['Budget Transparency']['world_everage']), 'x2': w - xScale(+profileData['Budget Transparency']['world_everage']), 'y2': h}).attr('clip-path', 'url(#bud-tra-mask)');
	svg.select('.bud-tra-regional').attr({'x1': w, 'y1': h + yScale(+profileData['Budget Transparency']['regional_everage']), 'x2': w - xScale(+profileData['Budget Transparency']['regional_everage']), 'y2': h}).attr('clip-path', 'url(#bud-tra-mask)');
	svg.select('.bud-tra-income').attr({'x1': w, 'y1': h + yScale(+profileData['Budget Transparency']['income_group_everage']), 'x2': w - xScale(+profileData['Budget Transparency']['income_group_everage']), 'y2': h}).attr('clip-path', 'url(#bud-tra-mask)');
	svg.select('.e-tra-overall').attr({'x1': w - zScale(+profileData['E-Transparency']['world_everage']), 'y1': h * 2, 'x2': w - zScale(+profileData['E-Transparency']['world_everage']), 'y2': 0}).attr('clip-path', 'url(#e-tra-mask)');
	svg.select('.e-tra-regional').attr({'x1': w - zScale(+profileData['E-Transparency']['regional_everage']), 'y1': h * 2, 'x2': w - zScale(+profileData['E-Transparency']['regional_everage']), 'y2': 0}).attr('clip-path', 'url(#e-tra-mask)');
	svg.select('.e-tra-income').attr({'x1': w - zScale(+profileData['E-Transparency']['income_group_everage']), 'y1': h * 2, 'x2': w - zScale(+profileData['E-Transparency']['income_group_everage']), 'y2': 0}).attr('clip-path', 'url(#e-tra-mask)');
	svg.select('.e-part-overall').attr({'x1': w, 'y1': h - yScale(+profileData['Digital Citizens']['world_everage']), 'x2': w - xScale(+profileData['Digital Citizens']['world_everage']), 'y2': h}).attr('clip-path', 'url(#e-part-mask)');
	svg.select('.e-part-regional').attr({'x1': w, 'y1': h - yScale(+profileData['Digital Citizens']['regional_everage']), 'x2': w - xScale(+profileData['Digital Citizens']['regional_everage']), 'y2': h}).attr('clip-path', 'url(#e-part-mask)');
	svg.select('.e-part-income').attr({'x1': w, 'y1': h - yScale(+profileData['Digital Citizens']['income_group_everage']), 'x2': w - xScale(+profileData['Digital Citizens']['income_group_everage']), 'y2': h}).attr('clip-path', 'url(#e-part-mask)');

	// setting circles
	svg.select('g.jud-ind ellipse').attr('cy', poly1.z);
	svg.select('g.adm-sim ellipse').attr('cx', rect1.z);
	svg.select('g.tra-open ellipse').attr('cy', poly3.z);
	svg.select('g.bud-tra ellipse').attr('cy', poly4.z);
	svg.select('g.e-tra ellipse').attr('cx', rect2.z);
	svg.select('g.e-part ellipse').attr('cy', poly6.z);

	var el1 = svg.select('g.jud-ind ellipse').node().getBBox(),
		el2 = svg.select('g.adm-sim ellipse').node().getBBox(),
		el3 = svg.select('g.tra-open ellipse').node().getBBox(),
		el4 = svg.select('g.bud-tra ellipse').node().getBBox(),
		el5 = svg.select('g.e-tra ellipse').node().getBBox(),
		el6 = svg.select('g.e-part ellipse').node().getBBox();
	// console.log(el1.x, el1.y, svg.select('g.jud-ind .text'));

	// setting circle text
	console.log(poly1.y);
	svg.select('g.jud-ind text').attr({'x': w, 'y': poly1.z + 2, 'transform': "rotate(30, " + w + ", " + h + ")"}).text(country['Judicial Independence']);
	svg.select('g.adm-sim text').attr({'x': rect1.z, 'y': h + 5}).text(country['Administrative Simplicity']);
	svg.select('g.tra-open text').attr({'x': w, 'y': h * 2 - poly3.z + 4, 'transform': "rotate(-30, " + w + ", " + h + ")"}).text(country['Trade Openness']);
	svg.select('g.bud-tra text').attr({'x': w, 'y': h * 2 - poly4.z + 4, 'transform': "rotate(30, " + w + ", " + h + ")"}).text(country['Budget Transparency']);
	svg.select('g.e-tra text').attr({'x': rect2.z, 'y': h + 4}).text(country['E-Transparency']);
	svg.select('g.e-part text').attr({'x': w, 'y': poly6.z + 4, 'transform': "rotate(-30, " + w + ", " + h + ")"}).text(country['Digital Citizens']);

	// setting center text
	svg.select('polygon.center-poly').attr('points', w + ',' + (h - 30) + ' 155,135 155,165 ' + w + ',' + (h + 30) + ' 103,165 103,135');
	svg.select('g.centertext text.ipi').text(profileData['IPI']);
};

function chartsRender() {
	var graphWidth = d3.select('.comparison-table td.graph').node().getBoundingClientRect().width,
		graphScale = d3.scale.linear().domain([0, 10]).range([0, graphWidth]);

	// table graphs
	d3.select('.comparison-table.jud-ind td.graph.country_score div').style('width', graphScale(profileData['Judicial Independence']['country_score']) + 'px');
	d3.select('.comparison-table.jud-ind td.graph.world_everage div').style('width', graphScale(profileData['Judicial Independence']['world_everage']) + 'px');
	d3.select('.comparison-table.jud-ind td.graph.income_group_everage div').style('width', graphScale(profileData['Judicial Independence']['income_group_everage']) + 'px');
	d3.select('.comparison-table.jud-ind td.graph.regional_everage div').style('width', graphScale(profileData['Judicial Independence']['regional_everage']) + 'px');
	
	d3.select('.comparison-table.tra-open td.graph.country_score div').style('width', graphScale(profileData['Trade Openness']['country_score']) + 'px');
	d3.select('.comparison-table.tra-open td.graph.world_everage div').style('width', graphScale(profileData['Trade Openness']['world_everage']) + 'px');
	d3.select('.comparison-table.tra-open td.graph.income_group_everage div').style('width', graphScale(profileData['Trade Openness']['income_group_everage']) + 'px');
	d3.select('.comparison-table.tra-open td.graph.regional_everage div').style('width', graphScale(profileData['Trade Openness']['regional_everage']) + 'px');
	
	d3.select('.comparison-table.e-tra td.graph.country_score div').style('width', graphScale(profileData['E-Transparency']['country_score']) + 'px');
	d3.select('.comparison-table.e-tra td.graph.world_everage div').style('width', graphScale(profileData['E-Transparency']['world_everage']) + 'px');
	d3.select('.comparison-table.e-tra td.graph.income_group_everage div').style('width', graphScale(profileData['E-Transparency']['income_group_everage']) + 'px');
	d3.select('.comparison-table.e-tra td.graph.regional_everage div').style('width', graphScale(profileData['E-Transparency']['regional_everage']) + 'px');

	d3.select('.comparison-table.adm-sim td.graph.country_score div').style('width', graphScale(profileData['Administrative Simplicity']['country_score']) + 'px');
	d3.select('.comparison-table.adm-sim td.graph.world_everage div').style('width', graphScale(profileData['Administrative Simplicity']['world_everage']) + 'px');
	d3.select('.comparison-table.adm-sim td.graph.income_group_everage div').style('width', graphScale(profileData['Administrative Simplicity']['income_group_everage']) + 'px');
	d3.select('.comparison-table.adm-sim td.graph.regional_everage div').style('width', graphScale(profileData['Administrative Simplicity']['regional_everage']) + 'px');

	d3.select('.comparison-table.bud-tra td.graph.country_score div').style('width', graphScale(profileData['Budget Transparency']['country_score']) + 'px');
	d3.select('.comparison-table.bud-tra td.graph.world_everage div').style('width', graphScale(profileData['Budget Transparency']['world_everage']) + 'px');
	d3.select('.comparison-table.bud-tra td.graph.income_group_everage div').style('width', graphScale(profileData['Budget Transparency']['income_group_everage']) + 'px');
	d3.select('.comparison-table.bud-tra td.graph.regional_everage div').style('width', graphScale(profileData['Budget Transparency']['regional_everage']) + 'px');

	d3.select('.comparison-table.e-part td.graph.country_score div').style('width', graphScale(profileData['Digital Citizens']['country_score']) + 'px');
	d3.select('.comparison-table.e-part td.graph.world_everage div').style('width', graphScale(profileData['Digital Citizens']['world_everage']) + 'px');
	d3.select('.comparison-table.e-part td.graph.income_group_everage div').style('width', graphScale(profileData['Digital Citizens']['income_group_everage']) + 'px');
	d3.select('.comparison-table.e-part td.graph.regional_everage div').style('width', graphScale(profileData['Digital Citizens']['regional_everage']) + 'px');

};

function renderPage() {
	d3.selectAll('.countryname').html(country.countryname);
	d3.select('.countryflag').attr('src', 'img/cont/flags/' + country.flag_image + '.jpg' );
	d3.select('#totalIpi').text((Math.round(country.IPI * 100) / 100).toFixed(2));
	d3.select('#countryRank').html(profileData['rank'] + '<span>/ 88</span>');
	// table graphs
	d3.select('.comparison-table.jud-ind td.component-rank').html('Rank ' + profileData['Judicial Independence']['rank'] + '/90');
	d3.select('.comparison-table.tra-open td.component-rank').html('Rank ' + profileData['Trade Openness']['rank'] + '/90');
	d3.select('.comparison-table.e-tra td.component-rank').html('Rank ' + profileData['E-Transparency']['rank'] + '/90');
	d3.select('.comparison-table.adm-sim td.component-rank').html('Rank ' + profileData['Administrative Simplicity']['rank'] + '/90');
	d3.select('.comparison-table.bud-tra td.component-rank').html('Rank ' + profileData['Budget Transparency']['rank'] + '/90');
	d3.select('.comparison-table.e-part td.component-rank').html('Rank ' + profileData['Digital Citizens']['rank'] + '/90');

	var app = angular.module('myApp', [ ]);

	app.controller('ComponentsController', function () {
		this.country = profileData;
	});

	app.controller('OtherdataController', function () {
		this.country = otherData;
	});
	
};

polyBtn.on('click', function(event) {
	d3.event.preventDefault();
	var $this = d3.select(this),
		toggle = $this.attr('data-toggle');

	polyBtn.classed('active', false);
	$this.classed('active', true);

	svg.selectAll('line.score-line').transition().duration(400).style({'visibility': 'visible', 'opacity': 0});
	svg.selectAll('line.score-line.' + toggle).transition().duration(400).style({'visibility': 'visible', 'opacity': 1});
});

polyBtn.on('click', function(event) {
	d3.event.preventDefault();
	var $this = d3.select(this),
		toggle = $this.attr('data-toggle');

	polyBtn.classed('active', false);
	$this.classed('active', true);

	svg.selectAll('line.score-line').transition().duration(400).style({'visibility': 'visible', 'opacity': 0});
	svg.selectAll('line.score-line.' + toggle).transition().duration(400).style({'visibility': 'visible', 'opacity': 1});
});

componentColor.on('mouseenter', function(event) {
	var $this = d3.select(this),
		target = '.' + $this.attr('data-target');

	svg.select(target).transition().duration(400).style({'visibility': 'visible', 'opacity': 1});
});

componentColor.on('mouseout', function(event) {
	var $this = d3.select(this),
		target = '.' + $this.attr('data-target');

	svg.select(target).transition().duration(400).style({'visibility': 'hidden', 'opacity': 0});
});


}());
