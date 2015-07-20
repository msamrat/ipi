/*jslint browser: true, forin: true, plusplus: true, bitwise: true, regexp: true, indent: 4 */
/*global d3, window, groups */
(function () {
    'use strict';
    var chart = d3.select('#chart'),
        toolbarWrapper = d3.select('.toolbar-wrapper'),
        toolbar = d3.select('#toolbar'),
        toolbarIpi = toolbar.select('#tolbar-ipi'),
        rank = toolbar.select('#rank'),
        buttons = toolbar.selectAll('#toolbar-btns .button'),
        countryBtn = toolbar.select('#countryBtn'),
        viewChanger = toolbar.select('#view-changer'),
        viewToggle = toolbar.select('#view-toggle'),
        filterWrapper = toolbar.select('#filter-wrapper'),
        popup2 = d3.select('#pop-up-2'),
        doc = document.documentElement,
        filter = [],
        filteredData = [],
        compareCountryNames = [],
        regionLinks = 6,
        incomeLinks = 4,
        componentsCount = 6,
        left,
        compared = 0,
        countries,
        wScale = 0,
        wScaleGroup = 0,
        scale,
        rightWidth,
        sortedByNames = false,
        rankingView = true,
        sortData = function (d, sortBy) {
            sortBy = sortBy || 'name';
            if (sortBy === 'name') {
                d.sort(function (a, b) {
                    if (a.countryname > b.countryname) {
                        return 1;
                    }
                    return -1;
                });
            } else if (sortBy === 'newIpi') {
                d.sort(function (a, b) {
                    if (+a.newIpi > +b.newIpi) {
                        return -1;
                    }
                    if (+a.newIpi < +b.newIpi) {
                        return 1;
                    }
                    if (+a.newIpi === +b.newIpi) {
                        if (a.countryname < b.countryname) {
                            return -1;
                        }
                        return 1;
                    }
                });
            } else {
                d.sort(function (a, b) {
                    if (+a.ipi > +b.ipi) {
                        return -1;
                    }
                    if (+a.ipi < +b.ipi) {
                        return 1;
                    }
                    if (+a.ipi === +b.ipi) {
                        if (a.countryname < b.countryname) {
                            return -1;
                        }
                        return 1;
                    }
                });
            }
            for (var i = 0, j = d.length; i < j; i++) {
                d[i].top = i * 28;
                d[i].rank = i + 1;
            };
            d.sort(function (a, b) {
                return a.fixedRank > b.fixedRank ? 1: -1;
            });
        },
        sortDataByComponent = function (d, component) {
            d.sort(function (a, b) {
                if (+a[component] > b[component]) {
                    return -1;
                }
                return 1;
            });
            for (var i = 0, j = d.length; i < j; i++) {
                d[i].top = i * 28;
                d[i].rank = i + 1;
            };
            d.sort(function (a, b) {
                return a.fixedRank > b.fixedRank ? 1: -1;
            });
        },
        changeBarPosition = function (d, elements, noRank) {
            noRank = noRank || false;
            for (var i = 0, j = d.length; i < j; i++) {
                var elem = d3.select(elements[0][i]);
                elem.transition().duration(1000).style({
                    'top': d[i].top + 'px',
                    opacity: 1
                });
                if (!noRank) {
                    elem.select('.rank').html(d[i].rank);
                }
            };
        },
        changeFilteredBarPosition = function () {
            var count = 0;
            for (var i = 0, j = data.length; i < j; i++) {
                var country = d3.select(countries[0][i]),
                    filtered = country.classed('filtered');
                if (filtered) {
                    country.transition().duration(800).style({'top': count * 28 + 'px', 'opacity': 1});
                    country.select('.rank').html(count + 1);
                    count += 1;
                } else {
                    country.transition().duration(800).style('opacity', 0);
                    country.select('.rank').html(i + 1);
                }
            };
            chart.transition().duration(600).style('height', count * 28 + 'px');
        },
        sortByFilters = function (types) {
            var count = 0;
            countries.classed('filtered', false);
            if (types.length > 0) {
                for (var i = 0, j = types.length; i < j; i++) {
                    var className = '.' + types[i];
                    chart.selectAll('.country'+className).classed('filtered', true);
                };
                var filteredElements = chart.selectAll('filtered');
                for (var i = 0, j = data.length; i < j; i++) {
                    var country = d3.select(countries[0][i]),
                        filtered = country.classed('filtered');
                    if (filtered) {
                        country.transition().duration(800).style({'top': count * 28 + 'px', 'opacity': 1});
                        country.select('.rank').html(count + 1);
                        count += 1;
                    } else {
                        country.transition().duration(800).style('opacity', 0);
                        country.select('.rank').html(i + 1);
                    }
                };
                chart.transition().duration(600).style('height', count * 28 + 'px');
            } else {
                for (var i = 0, j = countries[0].length; i < j; i++) {
                    var country = d3.select(countries[0][i]);
                    country.transition().duration(600).style({
                        'top': i * 28 + 'px',
                        'opacity': 1
                    });
                    count += 1;
                };
                chart.transition().duration(600).style('height', count * 28 + 'px');
            }
        };

    function removeFilter(filter, target) {
        var index = filter.indexOf(target);
        if (index >= 0) {
            filter.splice(index,1);
        }
    };
    function get2D( num ) {
        if (num.toString().split('.')[0].length < 2) {
            return '0' + num;
        }
        return num;
    }

    d3.select(window).on('scroll', function(event) {
        var windowTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        if (windowTop >= 96) {
            toolbarWrapper.classed('fixed', true);
        } else {
            toolbarWrapper.classed('fixed', false);
        }
    });

    chart.style('height', data.length * 28 + 'px');

    for (var i = 0, j = data.length; i < j; i++) {
        var curData = data[i], bar;
        curData.ipi = (Math.round((+curData['Judicial Independence'] + +curData['Administrative Simplicity'] + +curData['Trade Openness'] + +curData['Budget Transparency'] + +curData['E-Transparency'] + +curData['Digital Citizens']) * 100) / 100).toFixed(2);
        curData.newIpi = curData.ipi;
        curData.fixedRank = i;
        curData.rank = i;
        curData.top = i * 28;
        curData.filtered = false;

        var country = chart.append('div').attr({
            'class': 'row2 country ' + curData.region.toLowerCase() + ' ' + curData['income_class_shortcode'].toLowerCase(),
            'data-country-name': curData.countryname
        }).style('top', curData.top + 'px');

        left = country.append('div').attr('class', 'left');

        rightWidth = chart.node().getBoundingClientRect().width - left.node().getBoundingClientRect().width;
        wScale = d3.scale.linear().domain([0, 60]).range([0, rightWidth]);
        wScaleGroup = d3.scale.linear().domain([0, 10]).range([0, rightWidth / 6]);

        bar = country.append('div').attr('class', 'right').style('width', rightWidth + 'px').append('div').attr({'class': 'bar', 'data-country-name': curData.countryname}).style('width', wScale(curData.ipi) + 1 + 'px');
        left.append('p').attr('class', 'rank').text(curData.rank + 1);
        left.append('div').attr('class', 'country-flag').html('<img src="'+ curData.flag_image + '" />');
        left.append('div').attr('class', 'compare-box').attr({
            'data-country-name': curData.countryname
        }).append('div').attr('class', 'checkbox');
        left.append('a').attr({ class: 'country-name', 'href': 'country-profile?id='+ curData.fixedRank }).text(curData.countryname);
        left.append('p').attr('class', 'ipi').html('<span></span>' + (Math.round(curData.ipi * 100) / 100).toFixed(2));

        bar.append('div').attr('class', 'group').append('div').attr({
            'class': 'component jud-ind',
            'data-type': 'jud-ind',
            'data-value': curData['Judicial Independence'],
            'data-component-type': 'Judicial Independence',
            'data-icon': 'judicial-independence-toolbar.png'
        }).style('width', wScaleGroup(curData['Judicial Independence']) + 'px');

        bar.append('div').attr('class', 'group').append('div').attr({
            'class': 'component adm-sim',
            'data-type': 'adm-sim',
            'data-value': curData['Administrative Simplicity'],
            'data-component-type': 'Administrative Simplicity',
            'data-icon': 'administrative-simplicity-toolbar.png'
        }).style('width', wScaleGroup(curData['Administrative Simplicity']) + 'px');

        bar.append('div').attr('class', 'group').append('div').attr({
            'class': 'component tra-open',
            'data-type': 'tra-open',
            'data-value': curData['Trade Openness'],
            'data-component-type': 'Trade Openness',
            'data-icon': 'trade-openness-toolbar.png'
        }).style('width', wScaleGroup(curData['Trade Openness']) + 'px');

        bar.append('div').attr('class', 'group').append('div').attr({
            'class': 'component bud-tra',
            'data-type': 'bud-tra',
            'data-value': curData['Budget Transparency'],
            'data-component-type': 'Budget Transparency',
            'data-icon': 'budget-transparency-toolbar.png'
        }).style('width', wScaleGroup(curData['Budget Transparency']) + 'px');

        bar.append('div').attr('class', 'group').append('div').attr({
            'class': 'component e-tra',
            'data-type': 'e-tra',
            'data-value': curData['E-Transparency'],
            'data-component-type': 'E-Transparency',
            'data-icon': 'e-transparency-toolbar.png'
        }).style('width', wScaleGroup(curData['E-Transparency']) + 'px');

        bar.append('div').attr('class', 'group').append('div').attr({
            'class': 'component e-part',
            'data-type': 'e-part',
            'data-value': curData['Digital Citizens'],
            'data-component-type': 'Digital Citizens',
            'data-icon': 'digital-citizens-toolbar.png'
        }).style('width', wScaleGroup(curData['Digital Citizens']) + 'px');
    };
    countries = chart.selectAll('.country');

    d3.select(window).on('resize', function(event) {
        rightWidth = chart.node().getBoundingClientRect().width - chart.select('.left').node().getBoundingClientRect().width;
        wScale = d3.scale.linear().domain([0, 60]).range([0, rightWidth]);
        wScaleGroup = d3.scale.linear().domain([0, 10]).range([0, rightWidth / 6]);

        for (var i = 0, j = countries[0].length; i < j; i++) {
            var country = d3.select(countries[0][i]), bar;

            country.select('.right').style('width', rightWidth + 'px');
            country.select('.bar').style('width', wScale(data[i].ipi) + 1 + 'px');
            country.select('.component.jud-ind').style('width', wScaleGroup(data[i]['Judicial Independence']) + 'px');
            country.select('.component.adm-sim').style('width', wScaleGroup(data[i]['Administrative Simplicity']) + 'px');
            country.select('.component.tra-open').style('width', wScaleGroup(data[i]['Trade Openness']) + 'px');
            country.select('.component.bud-tra').style('width', wScaleGroup(data[i]['Budget Transparency']) + 'px');
            country.select('.component.e-tra').style('width', wScaleGroup(data[i]['E-Transparency']) + 'px');
            country.select('.component.e-part').style('width', wScaleGroup(data[i]['Digital Citizens']) + 'px');
        };
    });

///////////////////////////////////////////////////                            ///////////////////////////////////////////////////
/////////////////////////////////////////////////// Tool functionality starts ///////////////////////////////////////////////////
///////////////////////////////////////////////////                           ///////////////////////////////////////////////////
    function compareBox(event) {
        if (!toolbar.select('#compare-tool a').classed('active')) {
            d3.event.preventDefault();
            var $this = d3.select(this),
                active = $this.classed('active'),
                countryName = $this.attr('data-country-name'),
                parent = $this.node().parentNode,
                parentCountry = d3.select(parent).node().parentNode;

            if (compared === 0) {
                
                countries.classed('filtered', false);
                filter = [];
                filteredData = [];
                filterWrapper.selectAll('p.links a').classed('active', false);
                filterWrapper.selectAll('p.links').transition().duration(300).style({'width': '0px', 'left': '90px'});
                filterWrapper.selectAll('p.first.semi_active').classed('semi_active', false);
                filterWrapper.selectAll('p.first.active').classed('active', false);
            }

            if (active) {
                // chart.selectAll('.compare-box').on('click', null);
                $this.classed('active', false);
                compared -= 1;
                removeFilter(compareCountryNames, countryName);
                d3.select(parentCountry).classed('filtered', false);
            } else {
                // chart.selectAll('.compare-box').on('click', compareBox);
                $this.classed('active', true);
                compared += 1;
                compareCountryNames.push(countryName);
                d3.select(parentCountry).classed('filtered', true);
            }

            if (compared > 1) {
                // add compare button in toolbar
                toolbar.select('#compare-tool p').transition().duration(300).style('margin-top', '-40px');
                
            } else {
                // hide compare button from toolbar
                toolbar.select('#compare-tool p').transition().duration(300).style('margin-top', '0px');
            }
        };
    }

    chart.selectAll('.compare-box').on('click', compareBox);

    toolbar.select('#compare-tool a').on('click', function(event) {
        d3.event.preventDefault();
        var $this = d3.select(this),
            active = $this.classed('active');

        compared = 0;
        if (active) {
            filter = [];
            compareCountryNames = [];
            chart.selectAll('.compare-box').classed('active', false);
            countries.classed('filtered', false);
            chart.transition().duration(400).style('height', data.length * 28 + 'px');
            for (var i = 0, j = data.length; i < j; i++) {
                data[i].filtered = false;
                d3.select(countries[0][i]).transition().duration(400).style({'opacity': 1, 'top': i * 28 + 'px'});
            };
            sortData(filteredData, 'newIpi');
            $this.classed('active', false).text('Compare');
            toolbar.select('#compare-tool p').transition().duration(300).style('margin-top', '0px')
        } else {
            $this.classed('active', true).html('Click to<span>go back</span>');
            chart.selectAll('.compare-box').classed('active', false);
            filter = compareCountryNames;
        
            filteredData = data.filter(function(index) {
                if (compareCountryNames.indexOf(index.countryname) != -1) {
                    index.filtered = true;
                    return true;
                } else {
                    index.filtered = false;
                    return false;
                }
            });
            var filteredCountries = chart.selectAll('.country.filtered');
            sortData(filteredData, 'newIpi');
            changeFilteredBarPosition();
        }
    });

    countryBtn.on('click', function(event) {
        d3.event.preventDefault();
        if (sortedByNames) {
            d3.select(this).html('Country');
            if (filter.length > 0) {
                sortData(filteredData);
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries);
            } else {
                sortData(data, 'newIpi');
                changeBarPosition(data, countries, true);
            }
            sortedByNames = false;
        }else {
            d3.select(this).html('Country <span>[A-Z]</span>');
            if (filter.length > 0) {
                sortData(filteredData, 'name');
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries, true);
            } else {
                sortData(data);
                changeBarPosition(data, countries, true);
            }
            sortedByNames = true;
        }
    });

    toolbarIpi.on('click', function(event) {
        d3.event.preventDefault();
        if (sortedByNames) {
            if (filter.length > 0) {
                sortData(filteredData, 'newIpi');
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries);
            } else {
                sortData(data, 'newIpi');
                changeBarPosition(data, countries);
            }
            countryBtn.html('Country');
            sortedByNames = false;
        };
    });

    viewToggle.on('click', function(event) {
        var groups = chart.selectAll('.group'),
            bars = chart.selectAll('.bar');
            filteredData = [];
            filter = [];

            compared = 0;
            chart.selectAll('.compare-box').classed('active', false);
            toolbar.select('#compare-tool a').classed('active', false).text('Compare');
            toolbar.select('#compare-tool p').transition().duration(300).style('margin-top', '0px');
            compareCountryNames = [];

            filterWrapper.selectAll('.filter').classed('active', true);
            filterWrapper.selectAll('.filters').transition().duration(200).style('opacity', 0).style('display', 'none')
            filterWrapper.selectAll('.filter-btn').classed('active', false);
            regionLinks = 6;
            incomeLinks = 4;

            sortedByNames = false;
            countryBtn.html('Country');
            filterWrapper.selectAll('p.links a').classed('active', false);
            filterWrapper.selectAll('p.links').transition().duration(300).style({'width': '0px', 'left': '90px'});
            filterWrapper.selectAll('p.first.semi_active').classed('semi_active', false);
            filterWrapper.selectAll('p.first.active').classed('active', false);
        if (rankingView) {
            viewChanger.select('.ranking-view').classed('active', false);
            viewChanger.select('.component-view').classed('active', true);
            viewChanger.select('.switch-wrapper').transition().duration(400).style('opacity', 0).style('diplsy', 'none');
            bars.transition().duration(200).style('width', rightWidth + 'px').style('background-color', '#fff');
            buttons.classed('active', true);
            groups.transition().duration(200).style('width', Math.floor(rightWidth / 6) + 'px');
            for (var i = 0, j = countries[0].length; i < j; i++) {
                var country = d3.select(countries[0][i]);
                country.style('opacity', 1);
                country.select('.ipi').html(data[i].ipi);
                country.select('.jud-ind').style('width', wScaleGroup(data[i]['Judicial Independence']) + 'px');
                country.select('.adm-sim').style('width', wScaleGroup(data[i]['Administrative Simplicity']) + 'px');
                country.select('.tra-open').style('width', wScaleGroup(data[i]['Trade Openness']) + 'px');
                country.select('.bud-tra').style('width', wScaleGroup(data[i]['Budget Transparency']) + 'px');
                country.select('.e-tra').style('width', wScaleGroup(data[i]['E-Transparency']) + 'px');
                country.select('.e-part').style('width', wScaleGroup(data[i]['Digital Citizens']) + 'px');
            }
            sortData(data, 'ipi');
            changeBarPosition(data, countries);
            rankingView = false;
        } else {
            viewChanger.select('.ranking-view').classed('active', true);
            viewChanger.select('.component-view').classed('active', false);
            viewChanger.select('.switch-wrapper').transition().duration(400).style('opacity', 1).style('diplsy', 'inline-block');
            buttons.classed('active', true);
            groups.transition().duration(400).style('width', 'auto');
            for (var i = 0, j = bars[0].length; i < j; i++) {
                var country = d3.select(countries[0][i]);
                country.style('opacity', 1);
                d3.select(bars[0][i]).style('width', wScale(data[i].ipi) + 'px');
                country.select('.ipi').html(data[i].ipi);
                country.select('.jud-ind').style('width', wScaleGroup(data[i]['Judicial Independence']) + 'px');
                country.select('.adm-sim').style('width', wScaleGroup(data[i]['Administrative Simplicity']) + 'px');
                country.select('.tra-open').style('width', wScaleGroup(data[i]['Trade Openness']) + 'px');
                country.select('.bud-tra').style('width', wScaleGroup(data[i]['Budget Transparency']) + 'px');
                country.select('.e-tra').style('width', wScaleGroup(data[i]['E-Transparency']) + 'px');
                country.select('.e-part').style('width', wScaleGroup(data[i]['Digital Citizens']) + 'px');
            };
            sortData(data, 'ipi');
            changeBarPosition(data, countries);
            rankingView = true;
            bars.style('background-color', '#D9D9D9');
        }
        chart.style('height', countries[0].length * 28 + 'px');
    });


    filterWrapper.selectAll('.filter-btn').on('click', function(event) {
        var $this = d3.select(this),
            target = d3.select('#' + $this.attr('data-toggle'));

        filteredData = [];
        compareCountryNames = [];
        compared = 0;

        filterWrapper.selectAll('.filter').classed('active', true);
        filterWrapper.selectAll('.filter-btn').classed('active', false);
        filterWrapper.selectAll('.filters').transition().duration(400).style('opacity', 0).style('display', 'none');
        chart.style('height', data.length * 28 + 'px');
        countries.classed('filtered', false).transition().duration(400).style('opacity', 1);
        sortData(data, 'newIpi');
        changeBarPosition(data, countries);

        filterWrapper.selectAll('.filter-btn').classed('active', false);
        $this.classed('active', true);
        filterWrapper.selectAll('.filters').transition().duration(800).style('opacity', 0).style('display', 'none');
        target.style('display', 'block').transition().duration(800).style('opacity', 1);
    });

    filterWrapper.selectAll('#region-links .filter').on('click', function(event) {
        d3.event.preventDefault();
        var $this = d3.select(this),
            active = $this.classed('active'),
            target = $this.attr('data-target');

        if (regionLinks === 6 || regionLinks === 0) {
            filterWrapper.selectAll('#region-links .filter').classed('active', false);
            $this.classed('active', true);
            regionLinks = 1;

            filter = [];
            filteredData = [];
            compareCountryNames = [];
            compared = 0;

            filter.push(target);

            filterWrapper.selectAll('#income-group-links .filter').classed('active', false);
            incomeLinks = 0;
        } else if (regionLinks === 1) {
            if (!active) {
                $this.classed('active', true);
                regionLinks += 1;

                filter.push(target);
            }
        } else {
            if (active) {
                $this.classed('active', false);
                regionLinks -= 1;

                removeFilter(filter, target);

            } else {
                $this.classed('active', true);
                regionLinks += 1;

                filter.push(target);
            }
        }

        filteredData = data.filter(function(index) {
            if (filter.indexOf(index['region'].toLowerCase()) != -1) {
                index.filtered = true;
                return true;
            } else {
                index.filtered = false;
                return false;
            }
        });
        sortByFilters(filter);
    });

    filterWrapper.selectAll('#income-group-links .filter').on('click', function(event) {
        d3.event.preventDefault();
        var $this = d3.select(this),
            active = $this.classed('active'),
            target = $this.attr('data-target');

        if (incomeLinks === 4 || incomeLinks === 0) {
            filterWrapper.selectAll('#income-group-links .filter').classed('active', false);
            $this.classed('active', true);
            incomeLinks = 1;

            filter = [];
            filteredData = [];
            compareCountryNames = [];
            compared = 0;

            filter.push(target);

            filterWrapper.selectAll('#region-links .filter').classed('active', false);
            regionLinks = 0;
        } else if (incomeLinks === 1) {
            if (!active) {
                $this.classed('active', true);
                incomeLinks += 1;

                filter.push(target);
            }
        } else {
            if (active) {
                $this.classed('active', false);
                incomeLinks -= 1;

                removeFilter(filter, target);
            } else {
                $this.classed('active', true);
                incomeLinks += 1;

                filter.push(target);
            }
        }

        filteredData = data.filter(function(index) {
            if (filter.indexOf(index['income_class_shortcode']) != -1) {
                index.filtered = true;
                return true;
            } else {
                index.filtered = false;
                return false;
            }
        });
        sortByFilters(filter);
    });

    // buttons click function 
    buttons.on('click', function() {
        d3.event.preventDefault();
        var $this = d3.select(this),
            component = '.' + $this.attr('data-toggle-target'),
            dataTitle = $this.attr('data-title'),
            allIpi = chart.selectAll('.left .ipi'),
            isActive = $this.classed('active'),
            components = chart.selectAll(component);

        if (rankingView) {

            if (componentsCount === 6 || componentsCount === 0) {
                // 1. deselect all other components 
                buttons.classed('active', false);
                $this.classed('active', true);
                componentsCount = 1;
                // animate all other components
                chart.selectAll('.component').transition().duration(600).style({'width': '0px', 'border-right': 'none'});
                for (var i = 0, j = components[0].length; i < j; i++) {
                    d3.select(components[0][i]).transition().duration(600).style({
                        'width': wScale(data[i][dataTitle]) + 'px',
                        'border-right': '1px solid #fff'
                    });
                    data[i].newIpi = (Math.round((+data[i][dataTitle]) * 100) / 100).toFixed(2);
                    data[i].newIpi = get2D(data[i].newIpi);
                    d3.select(allIpi[0][i]).text(data[i].newIpi);
                };
                if (filter.length > 0) {
                    sortData(filteredData, 'newIpi');
                    var filteredCountries = chart.selectAll('.filtered');
                    changeBarPosition(filteredData, filteredCountries);
                } else {
                    sortData(data, 'newIpi');
                    changeBarPosition(data, countries);
                }

            } else if (componentsCount === 1) {
                if (!isActive) {
                    $this.classed('active', true);
                    componentsCount += 1;
                    for (var i = 0, j = components[0].length; i < j; i++) {
                        d3.select(components[0][i]).transition().duration(300).style({
                            'width': wScale(data[i][dataTitle]) + 'px',
                            'border-right': '1px solid #fff'
                        });
                        data[i].newIpi = (Math.round((+data[i].newIpi + +data[i][dataTitle]) * 100) / 100).toFixed(2);
                        data[i].newIpi = get2D(data[i].newIpi);
                        d3.select(allIpi[0][i]).text(data[i].newIpi);
                    };
                    if (filter.length > 0) {
                        sortData(filteredData, 'newIpi');
                        var filteredCountries = chart.selectAll('.filtered');
                        changeBarPosition(filteredData, filteredCountries);
                    } else {
                        sortData(data, 'newIpi');
                        changeBarPosition(data, countries);
                    }
                };
            } else {
                if (isActive) {
                    $this.classed('active', false);
                    componentsCount -= 1;
                    components.transition().duration(300).style({'width': '0px', 'border-right': 'none'});
                    for (var i = 0, j = components[0].length; i < j; i++) {
                        data[i].newIpi -= +data[i][dataTitle];
                        data[i].newIpi = (Math.round(+data[i].newIpi * 100) / 100).toFixed(2);
                        data[i].newIpi = get2D(data[i].newIpi);
                        d3.select(allIpi[0][i]).text(data[i].newIpi);
                    };
                    if (filter.length > 0) {
                        sortData(filteredData, 'newIpi');
                        var filteredCountries = chart.selectAll('.filtered');
                        changeBarPosition(filteredData, filteredCountries);
                    } else {
                        sortData(data, 'newIpi');
                        changeBarPosition(data, countries);
                    }
                } else {
                    $this.classed('active', true);
                    componentsCount += 1;
                    for (var i = 0, j = components[0].length; i < j; i++) {
                        d3.select(components[0][i]).transition().duration(300).style({
                            'width': wScale(data[i][dataTitle]) + 'px',
                            'border-right': '1px solid #fff'
                        });
                        data[i].newIpi = (Math.round((+data[i].newIpi + +data[i][dataTitle]) * 100) / 100).toFixed(2);
                        data[i].newIpi = get2D(data[i].newIpi);
                        d3.select(allIpi[0][i]).text(data[i].newIpi);
                    };
                    if (filter.length > 0) {
                        sortData(filteredData, 'newIpi');
                        var filteredCountries = chart.selectAll('.filtered');
                        changeBarPosition(filteredData, filteredCountries);
                    } else {
                        sortData(data, 'newIpi');
                        changeBarPosition(data, countries);
                    }
                }
            }

            // if (isActive) {
            //     $this.classed('active', false);
            //     components.transition().duration(300).style({
            //         'width': '0px',
            //         'border-right': 'none'
            //     });
            //     for (var i = 0, j = components[0].length; i < j; i++) {
            //         data[i].newIpi -= +data[i][dataTitle];
            //         data[i].newIpi = (Math.round(data[i].newIpi * 100) / 100).toFixed(2);
            //         d3.select(allIpi[0][i]).text(data[i].newIpi);
            //     };
            //     if (filter.length > 0) {
            //         sortData(filteredData, 'newIpi');
            //         var filteredCountries = chart.selectAll('.filtered');
            //         changeBarPosition(filteredData, filteredCountries);
            //     } else {
            //         sortData(data, 'newIpi');
            //         changeBarPosition(data, countries);
            //     }
            // } else {
            //     $this.classed('active', true);
            //     for (var i = 0, j = components[0].length; i < j; i++) {
            //         d3.select(components[0][i]).transition().duration(300).style({
            //             'width': wScale(data[i][dataTitle]) + 'px',
            //             'border-right': '1px solid #fff'
            //         });
            //         data[i].newIpi = (Math.round((+data[i].newIpi + +data[i][dataTitle]) * 100) / 100).toFixed(2);
            //         d3.select(allIpi[0][i]).text(data[i].newIpi);
            //     };
            //     if (filter.length > 0) {
            //         sortData(filteredData, 'newIpi');
            //         var filteredCountries = chart.selectAll('.filtered');
            //         changeBarPosition(filteredData, filteredCountries);
            //     } else {
            //         sortData(data, 'newIpi');
            //         changeBarPosition(data, countries);
            //     }
            // }
        } else {
            if (filter.length > 0) {
                sortDataByComponent(filteredData, dataTitle);
                for (var i = 0, j = data.length; i < j; i++) {
                    var country = d3.select(countries[0][i]),
                        digi2 = Math.round((+data[i][dataTitle] * 100) / 100).toFixed(2);
                    data[i].newIpi = +data[i][dataTitle];
                    digi2 = get2D(digi2);
                    country.select('.ipi').html(digi2);
                };
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries);
            } else {
                sortDataByComponent(data, dataTitle);
                for (var i = 0, j = data.length; i < j; i++) {
                    var country = d3.select(countries[0][i]),
                        digi2 = Math.round((+data[i][dataTitle] * 100) / 100).toFixed(2);
                    digi2 = get2D(digi2);
                    data[i].newIpi = +data[i][dataTitle];
                    country.select('.ipi').html(digi2);
                };
                changeBarPosition(data, countries);
            }
        }
    });

    chart.selectAll('.component').on('click', function(event) {
        var $this = d3.select(this),
            doc = document.documentElement,
            value = $this.attr('data-value'),
            componentType = $this.attr('data-component-type'),
            className = $this.attr('data-type'),
            dataIcon = $this.attr('data-icon'),
            title = popup2.select('.title'),
            scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0),
            mouseX = Math.ceil(d3.event.x),
            mouseY = Math.ceil(scrollTop) + Math.ceil(d3.event.y),
            $group = d3.select($this.node().parentNode),
            parentCountry = d3.select($group.node().parentNode).attr('data-country-name');

        popup2.attr('class', 'pop-up-2 ' + className);
        popup2.select('.title').text(parentCountry);
        popup2.select('.icon').html('<img src="img/icn/' + dataIcon +'" />');
        popup2.select('.category').text(componentType);
        popup2.select('.value').text(value);

        popup2.style({'left': mouseX - 100 + 'px', 'top': mouseY - 100 + 'px' }).transition().duration(200).style({'left': mouseX - 100 + 'px', 'top': mouseY - 75 + 'px', 'opacity': 1, 'visibility': 'visible'});
    });

    chart.selectAll('.component').on('mouseout', function(event) {
        popup2.attr('class', 'pop-up-2');
        popup2.style({'opacity': 0, 'visibility': 'hidden'});
    });

}());
