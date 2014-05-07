$(function () {
    
    var chart = new Highcharts.Chart({
    
        chart: {
            renderTo: 'container',
            type: 'gauge',
            plotBackgroundColor: null,        //any color or image behind the dial
            plotBackgroundImage: null,        //"
            plotBorderWidth: 0,
            plotShadow: false,
            spacingTop: 0,
            spacingRight: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            margin: 0
        },
        
        title: {
            text: 'Count',        //text you wanna display inside the dial
            y:100            // 
        },
        plotOptions: {
            gauge: {
                //Aguja y Centro
                dial: {
                    backgroundColor: 'pink',    //the needle
                    borderColor: 'black',        //needle's border
                    borderWidth: 1,
                    baseWidth: 3,
                    topWidth: 1
                },
                pivot:{
                    backgroundColor: 'blue',    //the center spot
                    radius: 6
                },
                dataLabels: {
                    borderWidth:0,    //show data in the background
                    color: '#FFF',
                    y: 70,
                    align: 'center',
                    useHTML:true,
                    formatter: function(){
                         return '<span class="label">'+this.y+'</span>';            /* formatter: function(){
                         return '<span class="label">'+this.y+'</span>';
                    } */
                    }
                }
            }
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#000'],    //outer most dial
                        [1, '#000']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#000'],  //second outer most dial
                        [1, '#000']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
                 backgroundColor: 'silver',    //main background
            }, {
                backgroundColor: 'blue',        //last outer dial
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },
           
        // the value axis
        yAxis: {
            min: 0,
            max: 200,
            
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,        
            minorTickPosition: 'inside',
            minorTickColor: '#666',
    
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{    //green band
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow band
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red band
            }]        
        },
    
        series: [{                          //.label {font-size:20px;}
            name: 'Speed',
            data: [300],    //give ur array
            tooltip: {
                valueSuffix: ' km/h' //suffix for count as heading
            }
        }]
    
    }, 
    // Add some life basically to show effect of needle
    function (chart) {
        setInterval(function () {
            var point = chart.series[0].points[0],
                newVal,
                inc = Math.round((Math.random() - 0.5) * 20);
            
            newVal = point.y + inc;
            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }
            
            point.update(newVal);
            
        }, 3000);
    });
});






 /*console.log(gaugeChart.render_gauge_chart)
    var chart=angular.copy(gaugeChart.render_gauge_chart);
    console.log(chart);*/