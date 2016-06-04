var app = angular.module('app',['ngRoute']);
//var app = angular.module('app',[]);
app.config(['$routeProvider', '$controllerProvider',
    function($routeProvider, $controllerProvider) {
        // remember mentioned function for later use
        app.registerCtrl = $controllerProvider.register;
        app.resolveScriptDeps = function(dependencies){
          return function($q,$rootScope){
            var deferred = $q.defer();
            $script(dependencies, function() {
              // all dependencies have now been loaded by $script.js so resolve the promise
              $rootScope.$apply(function()
              {
                deferred.resolve();
              });
            });
  
            return deferred.promise;
          }
        };
        //your routes
        $routeProvider.when('/', {templateUrl: 'home.html'});
        $routeProvider.when('/process1', {
          templateUrl: 'process1.html',
          resolve: {deps: app.resolveScriptDeps(['process1.js'])}
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }
]);

app.controller('LargeAppController',function(){});