
       //document.addEventListener('deviceready', function onDeviceReady() {
       //     angular.bootstrap(document, ['myApp']);
       // }, false);

        var myApp = angular.module('myApp',
	        ['ngRoute', 'appControllers', 'ngCordova']);

        var appControllers = angular.module('appControllers', []);
        
        var registered = localStorage.getItem("registered");

        myApp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'RegistrationController'
                }).
                when('/application', {
                    templateUrl: 'views/application.html',
                    controller: 'ApplicationController'
                }).
                when('/changeURL',{
                    templateUrl: 'views/changeUrl.html',
                    controller: 'ChangeURL'
                }).
                otherwise({
                    redirectTo: registered ? '/application' : '/register'
                   // redirectTo:'/changeURL'
                });          
        }]);
