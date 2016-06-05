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
        		alert("foobar");
                $scope.projects = [{ "_id": "1", "name":"project1" }];
            }
        }) 
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });