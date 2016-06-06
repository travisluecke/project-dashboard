/**
 * HOMER - Responsive Admin Theme
 * version 1.8
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    
    $urlRouterProvider
    .otherwise("/dashboard");
    
    $stateProvider

        // Dashboard - Main page
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: 'Dashboard',
            }
        })
        .state('projects', {
        	url: "/projects",
        	templateUrl: "views/projects.html",
        	data: {
        		pageTitle: "Active Projects Dashboard"
        	},
        	
        	controller: function($scope) {
                $scope.projects = [{ "_id": "336633", "name":"Store #1603", "onSchedule": true, "onBudget": true, "bugetOverage": "0" }, 
                                   { "_id": "336634", "name":"Store #1604", "onSchedule": true, "onBudget": false, "bugetOverage": "+$15,000" },
                                   { "_id": "336635", "name":"Store #1605", "onSchedule": false, "onBudget": true, "bugetOverage": "-$1,000"  }
                                   ];
            }
        }) 
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });