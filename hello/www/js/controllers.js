'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('DashCtrl', ['$scope',function($scope) {
  	$scope.open_issues=100;
	$scope.open_p1_issues=1002;
}])
  .controller('TableCtrl',['$scope','$http','DashServ',function($scope,$http,DashServ){
  	$scope.info=true;
  //  $http.get('http://desolate-earth-2852.herokuapp.com/declarations.json'/*get Json here from Ruby code*/)
  //     .then(function(res){ //res can be an array
  //        $scope.table_data = res.data;        
  //      });

  	$scope.table_data=['CPAT','CPAT Solr','Bing C','Practice','Siddesh B','RCA in progress','24 hours']; //Dummy Data
//make a function to get data dynamically and call it just below it
  	
  	
  	
    $scope.showLess=function(event,tableData)
    {
        $scope.info=true;
        $scope.show_more_datac=null;
    }


  	$scope.showMore=function(event,tableData)
  	{
  		// $scope.show_more_datac;
  		// $scope.show_more_datat;
  		// $scope.show_type;
        $scope.info=false;
  		$scope.show=DashServ.check(event.target.name);
  		$scope.show_type=tableData[1]; //must be equal to its short desc
  		$scope.show_more_datac='Ebrahim';  //this should contain the details of problem after clicking show more
  	}

  }])

  .controller('HighchartCtrl', ['$scope','gaugeChart',function($scope,gaugeChart) {
    $scope.chartOptions = [];
    var text=['PS','Finance Sys','Integrated Sys'];     //the array u are supposed to fetch to load data into highcharts
    var dafff=[60,80,100];
    for(var i in text){
        var chart=angular.copy(gaugeChart.render_gauge_chart);
        chart.title.text=text[i];
        chart.series[0].data=[dafff[i]];
        console.log(chart);
       $scope.chartOptions[i]=chart;
    }

   



    //$scope.highdata=[{'title':1},{'title':2},{'title':3}];
 //   $scope.chartOptions={
        //     chart: {
        //  //   renderTo: 'container',
        //     type: 'gauge',
        //     plotBackgroundColor: '#BFDFFF',        //any color or image behind the dial
        //     plotBackgroundImage: null,        //"
        //     plotBorderWidth: 0,
        //     plotShadow: false,
        //     spacingTop: 0,
        //     spacingRight: 0,
        //     spacingBottom: 0,
        //     spacingLeft: 0,
        //     margin: 0,
        //     height:400,
        //     width:250,
        // },
        
        // title: {
        //     text: ["People's Systems"],        //array text you wanna display inside the dial
                      
        // },
        // plotOptions: {
        //     gauge: {
        //         //Aguja y Centro
        //         dial: {
        //             backgroundColor: {              //the needle
        //             linearGradient: { x1: 0, y1: 0, x2: 2, y2: 0 },
        //             stops: [
        //                 [0, 'black'],    
        //                 [1, 'white']
        //             ]
        //         },    
        //             borderColor: 'white',        //needle's border
        //             borderWidth: 1,
        //             baseWidth: 7,
        //             topWidth: 3,
        //         },
        //         pivot:{
        //             backgroundColor: {              
        //             linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
        //             stops: [
        //                 [0, '#996633'],    
        //                 [1, 'black']
        //             ]
        //         },       //the center spot
        //             radius: 10
        //         },
        //         dataLabels: {
        //             borderWidth:1,    //show data in the background
        //             color: 'white',
        //             style:{
        //                 fontSize:'30px',
        //             },
        //             y: 45,
        //             align: 'center',
        //             useHTML:true,
                   
        //         }
        //     }
        // },
        
        // pane: {
        //     startAngle: -130,
        //     endAngle: 130,
        //     background: [{
        //         backgroundColor: {
        //             linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        //             stops: [
        //                 [0, 'white'],    //outer most dial
        //                 [1, '#996633']
        //             ]
        //         },
        //         borderWidth: 0,
        //         outerRadius: '118%'
        //     }, {
        //         backgroundColor: {
        //             linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        //             stops: [
        //                 [0, 'orange'],  //second outer most dial
        //                 [1, 'red']
        //             ]
        //         },
        //         borderWidth: 1,
        //         outerRadius: '107%'
        //     }, {
        //         // default background
        //          backgroundColor: {
        //             linearGradient: { x1: 0, y1: 0 , x2: 0, y2: 1 },
        //             stops: [
        //                 [0, '#FF9900'],    //#FF9900 original
        //                 [1, 'black']
        //             ]},
        //         },
        //         {
        //         backgroundColor: {
        //             linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        //             stops: [
        //                 [0, 'white'],  //most closest to the pivot
        //                 [1, 'yellow']
        //             ]
        //         },

        //         borderWidth: 1,
        //         outerRadius: '37%'
        //     },{
        //         backgroundColor: {
        //             linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        //             stops: [
        //                 [0, 'black'],  //second outer most dial
        //                 [1, 'silver']
        //             ]
        //         },
        //         borderWidth: 1,
        //         outerRadius: '20%'
        //     },
        //          {
        //         backgroundColor: 'black',        //last outer dial
        //         borderWidth: 0,
        //         outerRadius: '105%',
        //         innerRadius: '103%'
        //     }]


        // },
           
        // // the value axis
        // yAxis: {
        //     min: 0,
        //     max: 200,
            
        //     minorTickInterval: 'auto',
        //     minorTickWidth: 1,
        //     minorTickLength: 10,        
        //     minorTickPosition: 'inside',
        //     minorTickColor: 'black',
        
        //     tickPixelInterval: 30,
        //     tickWidth: 2,
        //     tickPosition: 'inside',
        //     tickLength: 10,
        //     tickColor: 'black',
        //     labels: {
        //         step: 2,
        //         rotation: 'auto'
        //     },
        //     title: {
        //         text: ''      //give nothing //array here
        //         },
        //     plotBands: [{    //green band
        //         from: 0,
        //         to: 60,
        //         color: '#55BF3B' // green
        //     }, {
        //         from: 600,
        //         to: 100,
        //         color: '#DDDF0D' // yellow band
        //     }, {
        //         from: 100,
        //         to: 200,
        //         color: '#DF5353' // red band
        //     }]        
        // },
    
        // series: [{
        //     name: 'Speed',
        //     data: [60],    //give ur array data here
        //     tooltip: {
        //         color:'red'
        //          //suffix for count as heading
        //     }
        // }]
 //}
  }])
.controller('TopAppCtrl',['$scope',function($scope)
{ 
  $scope.top_apps_names=['People Systems','Knowledge Systems','Finance Systems']
  $scope.top_apps=[{'rank':1,'app':'Sails(PS)','tickets':20},{'rank':2,'app':'FD(PS)','tickets':10},{'rank':3,'app':'Crash(O)','tickets':7}]; // Auto generate the rank based on query and get ruby json array here
}])
