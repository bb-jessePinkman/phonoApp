'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  service('DashServ',function(){
 
  	this.check=function(name)
  	{	
  		var data_obj='Dummy data';
  		return data_obj;
  	}

  })
.factory('gaugeChart',function(){

 

  var render_gauge_chart={
                chart: {
         //   renderTo: 'container',
            type: 'gauge',
            plotBackgroundColor: '#BFDFFF',        //any color or image behind the dial
            plotBackgroundImage: null,        //"
            plotBorderWidth: 0,
            plotShadow: false,
            spacingTop: 0,
            spacingRight: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            margin: 0,
            height:370,
            width:210,
        },
        
        title: {
            text: [],        //array text you wanna display inside the dial
                      
        },
        plotOptions: {
            gauge: {
                //Aguja y Centro
                dial: {
                    backgroundColor: {              //the needle
                    linearGradient: { x1: 0, y1: 0, x2: 2, y2: 0 },
                    stops: [
                        [0, 'black'],    
                        [1, 'white']
                    ]
                },    
                    borderColor: 'white',        //needle's border
                    borderWidth: 1,
                    baseWidth: 7,
                    topWidth: 3,
                },
                pivot:{
                    backgroundColor: {              
                    linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#996633'],    
                        [1, 'black']
                    ]
                },       //the center spot
                    radius: 10
                },
                dataLabels: {
                    borderWidth:1,    //show data in the background
                    color: 'white',
                    style:{
                        fontSize:'30px',
                    },
                    y: 45,
                    align: 'center',
                    useHTML:true, 
                }
            }
        },
        
        pane: {
            startAngle: -130,
            endAngle: 130,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, 'white'],    //outer most dial
                        [1, '#996633']
                    ]
                },
                borderWidth: 0,
                outerRadius: '118%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, 'orange'],  //second outer most dial
                        [1, 'red']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
                 backgroundColor: {
                    linearGradient: { x1: 0, y1: 0 , x2: 0, y2: 1 },
                    stops: [
                        [0, '#FF9900'],    //#FF9900 original
                        [1, 'black']
                    ]},
                },
                {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, 'white'],  //most closest to the pivot
                        [1, 'yellow']
                    ]
                },

                borderWidth: 1,
                outerRadius: '37%'
            },{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, 'black'],  //second outer most dial
                        [1, 'silver']
                    ]
                },
                borderWidth: 1,
                outerRadius: '20%'
            },
                 {
                backgroundColor: 'black',        //last outer dial
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
            minorTickColor: 'black',
        
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: 'black',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: ''      //give nothing //array here
                },
            plotBands: [{    //green band
                from: 0,
                to: 60,
                color: '#55BF3B' // green
            }, {
                from: 600,
                to: 100,
                color: '#DDDF0D' // yellow band
            }, {
                from: 100,
                to: 200,
                color: '#DF5353' // red band
            }]        
        },
    
        series: [{
            name: 'Speed',
            data: [],    //give ur array data here
            tooltip: {
                color:'red'
                 //suffix for count as heading
            }
        }]
  }
  var gaugeChart = {
    render_gauge_chart : render_gauge_chart
   }
   return gaugeChart;

});