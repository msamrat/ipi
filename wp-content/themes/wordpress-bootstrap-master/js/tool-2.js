/*jslint browser: true, forin: true, plusplus: true, bitwise: true, regexp: true, indent: 4 */
/*global d3, window, groups */
(function () {

    var chart = d3.select('#chart'),
        toolbarWrapper = d3.select('.toolbar-wrapper'),
        toolbar = d3.select('#toolbar'),
        buttons = toolbar.selectAll('#toolbar-btns .button'),
        countryBtn = toolbar.select('#countryBtn'),
        viewChanger = toolbar.select('#view-changer'),
        viewToggle = toolbar.select('#view-toggle'),
        toggle = toolbar.select('#toggle'),
        filterWrapper = toolbar.select('#filter-wrapper'),
        popup2 = d3.select('#pop-up-2'),
        doc = document.documentElement,
        filter = [],
        compareCountryNames = [],
        filteredData = [],
        left,
        bar,
        compare = 0,
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
            };
            d.sort(function (a, b) {
                return a.rank > b.rank ? 1: -1;
            });
        },
        sortDataByComponent = function (d, component) {
            d.sort(function (a, b) {
                if (+a[component] > b[component]) {
                    return -1;
                }
                return 1;
            });
            for (var i = 0, j = data.length; i < j; i++) {
                d[i].top = i * 28;
            };
            d.sort(function (a, b) {
                return a.rank > b.rank ? 1: -1;
            });
        },
        changeBarPosition = function (d, elements) {
            for (var i = 0, j = d.length; i < j; i++) {
                d3.select(elements[0][i]).transition().duration(1000).style('top', d[i].top + 'px');
            };
        },
        changeFilteredBarPosition = function () {
            var count = 0;
            for (var i = 0, j = data.length; i < j; i++) {
                var country = d3.select(countries[0][i]),
                    filtered = country.classed('filtered');
                if (filtered) {
                    country.transition().duration(800).style({'top': count * 28 + 'px', 'opacity': 1});
                    count += 1;
                } else {
                    country.transition().duration(800).style('opacity', 0);
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
                        count += 1;
                    } else {
                        country.transition().duration(800).style('opacity', 0);
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

    d3.select(window).on('scroll', function(event) {
        var windowTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        if (windowTop >= 96) {
            toolbarWrapper.classed('fixed', true);
        } else {
            toolbarWrapper.classed('fixed', false);
        }
    });

    chart.style('height', data.length * 28 + 'px');
    d3.select('.switch-wrapper .pop-up .text').text('Deselect All');

    for (var i = 0, j = data.length; i < j; i++) {
        var curData = data[i];
        curData.ipi = (Math.round((+curData['Judicial Independence'] + +curData['Administrative Simplicity'] + +curData['Trade Openness'] + +curData['Budget Transparency'] + +curData['E-Transparency'] + +curData['Digital Citizens']) * 100) / 100).toFixed(2);
        curData.newIpi = curData.ipi;
        curData.rank = i;
        curData.top = i * 28;
        curData.filtered = false;

        country = chart.append('div').attr({
            'class': 'row2 country ' + curData.region.toLowerCase() + ' ' + curData['income_class_shortcode'].toLowerCase(),
            'data-country-name': curData.countryname
        }).style('top', curData.top + 'px');

        left = country.append('div').attr('class', 'left');

        rightWidth = chart.node().getBoundingClientRect().width - left.node().getBoundingClientRect().width;
        wScale = d3.scale.linear().domain([0, 60]).range([0, rightWidth]);
        wScaleGroup = d3.scale.linear().domain([0, 10]).range([0, rightWidth / 6]);

        bar = country.append('div').attr('class', 'right').style('width', rightWidth + 'px').append('div').attr({'class': 'bar', 'data-country-name': curData.countryname}).style('width', wScale(curData.ipi) + 'px');
        left.append('p').attr('class', 'rank').text(curData.rank + 1);
        left.append('div').attr('class', 'country-flag').html('<img src="'+ curData.flag_image + '.jpg" />');
        left.append('div').attr('class', 'compare-box').attr({
            'data-country-name': curData.countryname
        }).append('div').attr('class', 'checkbox');
        left.append('a').attr({ class: 'country-name', 'href': '#' }).text(curData.countryname);
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

    countryBtn.on('click', function(event) {
        d3.event.preventDefault();
        if (sortedByNames) {
            d3.select(this).html('Country');
            if (filter.length > 0) {
                sortData(filteredData, 'newIpi');
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries);
            } else {
                sortData(data, 'newIpi');
                changeBarPosition(data, countries);
            }
            sortedByNames = false;
        }else {
            d3.select(this).html('Country <span>[A-Z]</span>');
            if (filter.length > 0) {
                sortData(filteredData, 'name');
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries);
            } else {
                sortData(data);
                changeBarPosition(data, countries);
                sortedByNames = true;
            }
        }
    });

    viewToggle.on('click', function(event) {
        var groups = chart.selectAll('.group'),
            bars = chart.selectAll('.bar');
            filteredData = [];
            filter = [];
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

    toggle.on('click', function(event) {
        var $this = d3.select(this), checked = $this.property('checked');
        if (checked) {
            if (filter.length > 0) {
                sortData(filteredData, 'ipi');
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries);
            } else {
                sortData(data, 'ipi');
                changeBarPosition(data, countries);
            }
            buttons.classed('active', false);
            for (var i = 0, j = countries[0].length; i < j; i++) {
                data[i].newIpi = 0;
                var country = d3.select(countries[0][i]);
                country.select('.ipi').html(data[i].ipi);
                chart.selectAll('.component').style('width', '0px');
                d3.select('.switch-wrapper .pop-up .text').text('Select All');
            };
        } else {
            if (filter.length > 0) {
                sortData(filteredData, 'ipi');
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries);
            } else {
                sortData(data, 'ipi');
                changeBarPosition(data, countries);
            }
            buttons.classed('active', true)
            for (var i = 0, j = countries[0].length; i < j; i++) {
                data[i].newIpi = data[i].ipi;
                var country = d3.select(countries[0][i]);
                country.select('.ipi').html(data[i].ipi);
                country.select('.jud-ind').style('width', wScaleGroup(data[i]['Judicial Independence']) + 'px');
                country.select('.adm-sim').style('width', wScaleGroup(data[i]['Administrative Simplicity']) + 'px');
                country.select('.tra-open').style('width', wScaleGroup(data[i]['Trade Openness']) + 'px');
                country.select('.bud-tra').style('width', wScaleGroup(data[i]['Budget Transparency']) + 'px');
                country.select('.e-tra').style('width', wScaleGroup(data[i]['E-Transparency']) + 'px');
                country.select('.e-part').style('width', wScaleGroup(data[i]['Digital Citizens']) + 'px');
                d3.select('.switch-wrapper .pop-up .text').text('Deselect All');
            }
        };
    });

    filterWrapper.selectAll('p.first').on('click', function(event) {
        d3.event.preventDefault();
        var $this = d3.select(this),
            toggle = d3.select('.' + $this.attr('data-toggle')),
            semiActive = $this.classed('semi_active'),
            incomeGroupBtn = $this.classed('income-group-btn');
            // filterWrapper.selectAll('p.links a').classed('active')

        filterWrapper.selectAll('p.first').classed('semi_active', false);
        $this.classed('semi_active', true);
        if (semiActive) {
            filterWrapper.selectAll('p.links').transition().duration(300).style({'width': '0px', 'left': '90px'});
            $this.classed('semi_active', false);
        } else {
            filterWrapper.selectAll('p.links').transition().duration(300).style({'width': '0px', 'left': '90px'});
            toggle.transition().duration(300).style({'width': '350px', 'left': '102px'});
            $this.classed('semi_active', true);
        }
    });

    filterWrapper.selectAll('p.links a').on('click', function(event) {
        d3.event.preventDefault();
        var $this = d3.select(this),
            active = $this.classed('active'),
            incomeGroup = $this.classed('incom-group'),
            target = $this.attr('data-target');

        if (compareCountryNames.length > 0) {
            compareCountryNames = [];
            filter = [];
            compare = [];
            toolbar.select('#compare-tool p').transition().duration(300).style('margin-top', '0px');
            chart.selectAll('.compare-box.active').classed('active', false);
        };

        if (incomeGroup) {
            var otherType,
                regionLinks = filterWrapper.selectAll('a.region');

            filterWrapper.select('p.region-btn').classed('active', false);
            filterWrapper.select('p.income-group-btn').classed('active', true);
            for (var i = 0, j = regionLinks[0].length; i < j; i++) {
                if (d3.select(regionLinks[0][i]).classed('active')) {
                    otherType = true;
                    break;
                }
            };
            if (otherType) {
                filterWrapper.selectAll('a.region').classed('active', false);
                filter = [];
            }
            if (active) {
                $this.classed('active', false);
                removeFilter(filter, target);
                sortByFilters(filter);
            } else {
                $this.classed('active', true);
                filter.push(target);
                sortByFilters(filter);
            }
            if (filter.length > 0) {
                filteredData = data.filter(function(index) {
                    if (filter.indexOf(index['income_class'].toLowerCase()) != -1) {
                        index.filtered = true;
                        return true;
                    } else {
                        index.filtered = false;
                        return false;
                    }
                });
            };
        }else {
            var otherType,
                incomeGroupLinks = filterWrapper.selectAll('a.incom-group');

            filterWrapper.select('p.income-group-btn').classed('active', false);
            filterWrapper.select('p.region-btn').classed('active', true);
            for (var i = 0, j = incomeGroupLinks[0].length; i < j; i++) {
                if (d3.select(incomeGroupLinks[0][i]).classed('active')) {
                    otherType = true;
                    break;
                }
            };
            if (otherType) {
                filterWrapper.selectAll('a.incom-group').classed('active', false);
                filter = [];
            }
            if (active) {
                $this.classed('active', false);
                removeFilter(filter, target);
                sortByFilters(filter);
            } else {
                $this.classed('active', true);
                filter.push(target);
                sortByFilters(filter);
            }
            if (filter.length > 0) {
                filteredData = data.filter(function(index) {
                    if (filter.indexOf(index['region'].toLowerCase()) != -1) {
                        index.filtered = true;
                        return true;
                    } else {
                        index.filtered = false;
                        return false;
                    }
                });
            };
        }
    });

    // buttons click function 
    buttons.on('click', function() {
        d3.event.preventDefault();
        var $this = d3.select(this),
            component = '.' + $this.attr('data-toggle-target'),
            dataTitle = $this.attr('data-title'),
            allIpi = chart.selectAll('.left .ipi');
            isActive = $this.classed('active'),
            components = chart.selectAll(component);

        if (rankingView) {
            if (isActive) {
                $this.classed('active', false);
                components.transition().duration(300).style('width', '0px');
                // ipi change
                for (var i = 0, j = components[0].length; i < j; i++) {
                    //update ipi
                    data[i].newIpi -= +data[i][dataTitle];
                    data[i].newIpi = (Math.round(data[i].newIpi * 100) / 100).toFixed(2);
                    d3.select(allIpi[0][i]).text(data[i].newIpi);
                };
                if (filter.length > 0) {
                    sortData(filteredData, 'newIpi');
                    var filteredCountries = chart.selectAll('.filtered');
                    changeBarPosition(filteredData, filteredCountries);
                } else {
                    // data sort
                    sortData(data, 'newIpi');
                    // position change
                    changeBarPosition(data, countries);
                }
            } else {
                $this.classed('active', true);
                for (var i = 0, j = components[0].length; i < j; i++) {
                    d3.select(components[0][i]).transition().duration(300).style('width', wScale(data[i][dataTitle]) + 'px');
                    // update newIpi
                    data[i].newIpi = (Math.round((+data[i].newIpi + +data[i][dataTitle]) * 100) / 100).toFixed(2);
                    // data[i].newIpi = (Math.round(data[i].newIpi * 100) / 100).toFixed(2);
                    d3.select(allIpi[0][i]).text(data[i].newIpi);
                };
                if (filter.length > 0) {
                    sortData(filteredData, 'newIpi');
                    var filteredCountries = chart.selectAll('.filtered');
                    changeBarPosition(filteredData, filteredCountries);
                } else {
                    // data sort
                    sortData(data, 'newIpi');
                    // position change
                    changeBarPosition(data, countries);
                }
            }
        } else {
            if (filter.length > 0) {
                sortData(filteredData, dataTitle);
                for (var i = 0, j = data.length; i < j; i++) {
                    var country = d3.select(countries[0][i]);
                    // country.select('.ipi').html(data[i][dataTitle]);
                    country.select('.ipi').html((Math.round(data[i][dataTitle] * 100) / 100).toFixed(2));
                };
                var filteredCountries = chart.selectAll('.filtered');
                changeBarPosition(filteredData, filteredCountries);
            } else {
                sortDataByComponent(data, dataTitle);
                for (var i = 0, j = data.length; i < j; i++) {
                    var country = d3.select(countries[0][i]);
                    // country.select('.ipi').html(data[i][dataTitle]);
                    country.select('.ipi').html((Math.round(data[i][dataTitle] * 100) / 100).toFixed(2));
                };
                changeBarPosition(data, countries);
            }
        }
    });

    chart.selectAll('.component').on('click', function(event) {
        var $this = d3.select(this),
            doc = document.documentElement
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

        console.log(scrollTop);
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

    chart.selectAll('.compare-box').on('click', function(event) {
        var $this = d3.select(this),
            active = $this.classed('active'),
            countryName = $this.attr('data-country-name'),
            parent = $this.node().parentNode,
            parentCountry = d3.select(parent).node().parentNode;

            if (compare == 0) {
                countries.classed('filtered', false);
                filter = [];
                filteredData = [];
                filterWrapper.selectAll('p.links a').classed('active', false);
                filterWrapper.selectAll('p.links').transition().duration(300).style({'width': '0px', 'left': '90px'});
                filterWrapper.selectAll('p.first.semi_active').classed('semi_active', false);
                filterWrapper.selectAll('p.first.active').classed('active', false);
            };

            if (active) {
                $this.classed('active', false);
                compare -= 1;
                removeFilter(compareCountryNames, countryName);
                d3.select(parentCountry).classed('filtered', false);
            } else {
                $this.classed('active', true);
                compare += 1;
                compareCountryNames.push(countryName);
                d3.select(parentCountry).classed('filtered', true);
            }

            if (compare > 1) {
                // add compare button in toolbar
                toolbar.select('#compare-tool p').transition().duration(300).style('margin-top', '-40px');
                
            } else {
                // hide compare button from toolbar
                toolbar.select('#compare-tool p').transition().duration(300).style('margin-top', '0px');
            }
    });

    toolbar.select('#compare-tool a').on('click', function(event) {
        d3.event.preventDefault();
        var $this = d3.select(this),
            active = $this.classed('active');

        if (active) {
            filter = [];
            compareCountryNames = [];
            filteredData = [];
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
            $this.classed('active', true).text('<');
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

}());
