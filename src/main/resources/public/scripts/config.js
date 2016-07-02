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
        	    $http.get('http://localhost:8080/api/projects').
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
        	
        	controller: function($scope) {
                $scope.budget = 
[
{ "_id": "436635","parentId" : null,"parentOf" : [], "siblings" : [],"name":"Store #1605","onSchedule": false,"onBudget": true,"buget" : 3000.00,"budgetOverage": -1000.00,"cost": 4000.00 },
{ "_id": "436633", "name":"Store #1603", "allocated": 100000, "onBudget": true, "budgetOverage": 0.00 }, 
{ "_id": "436634", "name":"Store #1604", "allocated": 125000, "onBudget": false, "budgetOverage": 15000.00 }
];
            }
        })
        .state('vendors', {
        	url: "/vendors",
        	templateUrl: "views/vendors/vendors.html",
        	data: {
        		pageTitle: "Vendors Dashboard"
        	},
        	
        	controller: function($scope) {
                $scope.vendors = 
[
{ "_id": "436635","parentId" : null,"parentOf" : [], "siblings" : [],"name":"Store #1605","onSchedule": false,"onBudget": true,"buget" : 3000.00,"budgetOverage": -1000.00,"cost": 4000.00 },
{ "_id": "436633", "name":"Store #1603", "allocated": 100000, "onBudget": true, "budgetOverage": 0.00 }, 
{ "_id": "436634", "name":"Store #1604", "allocated": 125000, "onBudget": false, "budgetOverage": 15000.00 }
];
            }
        })
        .state('contractors', {
        	url: "/contractors",
        	templateUrl: "views/contractors/contractors.html",
        	data: {
        		pageTitle: "Contractors Dashboard"
        	},
        	
        	controller: function($scope) {
                $scope.contractors = 
[
{ "_id": "436635","parentId" : null,"parentOf" : [], "siblings" : [],"name":"Store #1605","onSchedule": false,"onBudget": true,"buget" : 3000.00,"budgetOverage": -1000.00,"cost": 4000.00 },
{ "_id": "436633", "name":"Store #1603", "allocated": 100000, "onBudget": true, "budgetOverage": 0.00 }, 
{ "_id": "436634", "name":"Store #1604", "allocated": 125000, "onBudget": false, "budgetOverage": 15000.00 }
];
            }
        })
        .state('managers', {
        	url: "/managers",
        	templateUrl: "views/managers/managers.html",
        	data: {
        		pageTitle: "Managers Dashboard"
        	},
        	
        	controller: function($scope) {
                $scope.managers = 
[
{ "_id": "436635","parentId" : null,"parentOf" : [], "siblings" : [],"name":"Store #1605","onSchedule": false,"onBudget": true,"buget" : 3000.00,"budgetOverage": -1000.00,"cost": 4000.00 },
{ "_id": "436633", "name":"Store #1603", "allocated": 100000, "onBudget": true, "budgetOverage": 0.00 }, 
{ "_id": "436634", "name":"Store #1604", "allocated": 125000, "onBudget": false, "budgetOverage": 15000.00 }
];
            }
        })
        .state('installers', {
        	url: "/installers",
        	templateUrl: "views/installers/installers.html",
        	data: {
        		pageTitle: "Installers Dashboard"
        	},
        	
        	controller: function($scope) {
                $scope.installers = 
[
{ "_id": "436635","parentId" : null,"parentOf" : [], "siblings" : [],"name":"Store #1605","onSchedule": false,"onBudget": true,"buget" : 3000.00,"budgetOverage": -1000.00,"cost": 4000.00 },
{ "_id": "436633", "name":"Store #1603", "allocated": 100000, "onBudget": true, "budgetOverage": 0.00 }, 
{ "_id": "436634", "name":"Store #1604", "allocated": 125000, "onBudget": false, "budgetOverage": 15000.00 }
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