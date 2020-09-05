myApp.controller('RegistrationController', function ($scope,$rootScope, $location) {

    $scope.init = function () {
        $rootScope.registerPage = true;

        $rootScope.changeURL = function () {
            $location.path('/changeURL');
         }
        };


    document.addEventListener("deviceready", function () {

 //       document.getElementById("error").innerHTML = "s-a intrat in register.js";

        $rootScope.error = function () {
            //ngBind
            document.getElementById("error").innerHTML = "A aparut o eroare de conexiune..";
            setTimeout(function () { document.getElementById("error").innerHTML = ""; }, 3000);
        };

        $scope.register = function SendFirstInformation(nume,numar) {

 //           document.getElementById("error").innerHTML = "s-a apelat SFI";

            localStorage.setItem("name", nume);
            localStorage.setItem("number", numar);

            var informationstring = nume + "," + numar;

            var URL = localStorage.getItem("URL");
            var urlstring = URL+"/api/tracker/registeruser"
            var jqxhr = $.ajax({
                method: 'post',
                url: urlstring,
                data: { userdata: informationstring },
                //datatype: 'json',
                crossdomain: true,
                jsonp: false
            })
            .done(function () {
  //              document.getElementById("error").innerHTML = "s-a trimis SFI..";
                console.log("succesSFI");
                localStorage.setItem("registered", true);
                $rootScope.registerPage = false;
                $location.path('/application');
            })
            .fail(function (xhr, textstatus, errorthrown) {
                console.log(xhr.status);
                // SendFirstInformation(nume, numar);
                $rootScope.error();
            });
    };
}, false);
}); //RegistrationController