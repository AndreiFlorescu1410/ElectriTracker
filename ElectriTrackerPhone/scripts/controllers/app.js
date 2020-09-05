var myApp = angular.module('myApp',
	['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', ['firebase']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
	when('/register', {
	    templateUrl: 'views/register.html',
	    controller: 'MeetingsController'
	});
}]);