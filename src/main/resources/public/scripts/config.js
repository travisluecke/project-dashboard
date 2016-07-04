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
        	templateUrl: "views/projects/projects.html",
        	data: {
        		pageTitle: "Active Projects Dashboard"
        	},
        	
        	controller: 
        		function Projects($scope, $http) {
        	    $http.get('/api/projects').
        	        success(function(data) {
        	            $scope.projects = data;
        	        });
        	}
        		
        }) 
        .state('budget', {
        	url: "/budget",
        	templateUrl: "views/budget/budget.html",
        	data: {
        		pageTitle: "Budget Dashboard"
        	},
        	
        	controller: 
        		function Budgets($scope, $http) {
        	    $http.get('/api/budgets').
        	        success(function(data) {
        	            $scope.budgets = data;
        	        });
        	}
        })
        .state('vendors', {
        	url: "/vendors",
        	templateUrl: "views/vendors/vendors.html",
        	data: {
        		pageTitle: "Vendors Dashboard"
        	},
        	
        	controller: 
        		function Vendors($scope, $http) {
        	    $http.get('/api/vendors').
        	        success(function(data) {
        	            $scope.vendors = data;
        	        });
        	}
        })
        .state('contractors', {
        	url: "/contractors",
        	templateUrl: "views/contractors/contractors.html",
        	data: {
        		pageTitle: "Contractors Dashboard"
        	},
        	
        	controller: 
        		function Contractors($scope, $http) {
                $scope.contractors = 
            	    $http.get('/api/contractors').
        	        success(function(data) {
        	            $scope.contractors = data;
        	        });
        	}
        })
        .state('managers', {
        	url: "/managers",
        	templateUrl: "views/managers/managers.html",
        	data: {
        		pageTitle: "Managers Dashboard"
        	},
        	
        	controller: 
        		function Managers($scope, $http) {
        	    $http.get('/api/managers').
        	        success(function(data) {
        	            $scope.managers = data;
        	        });
        	}
        	
        })
        .state('installers', {
        	url: "/installers",
        	templateUrl: "views/installers/installers.html",
        	data: {
        		pageTitle: "Installers Dashboard"
        	},
        	
        	controller: 
        		function Installers($scope, $http) {
        	    $http.get('/api/installers').
        	        success(function(data) {
        	            $scope.installers = data;
        	        });
        	}
        	
        })
        
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });