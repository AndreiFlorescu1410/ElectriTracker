myApp.controller('ChangeURL', function ($scope, $rootScope, $location) {

    $scope.init = function () {
        $rootScope.changingUrl = true;
    };

    document.addEventListener("deviceready", function () {

        $scope.changeURL = function (URL) {

            localStorage.setItem("URL", URL);

            $rootScope.changingUrl = false;
            $rootScope.countOcupat = false;
            $rootScope.countUrgenta = false;
            $rootScope.countLiber = false;
            $rootScope.readyTSFI = false;
            $location.path('/register');
        }
        $scope.back = function () {
            $rootScope.changingUrl = false;
            console.log('uite');
            if ($rootScope.registerPage == true) {
                $location.path('/register');
            }
            else {
                $location.path('/application');
            }
        }
    }, false);
});//Change URL