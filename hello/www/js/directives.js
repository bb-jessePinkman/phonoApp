'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('highcharts', [function() {
    return{
		restrict:'A',
		link:function(scope,element,attrs)
		{
			var options=scope.$eval(attrs.highcharts);
			options.chart.renderTo=element[0];
			new Highcharts.Chart(options);
		}
	};
  }]);
