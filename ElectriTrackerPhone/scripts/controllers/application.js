myApp.controller('ApplicationController', function ($scope, $rootScope, $location) {

    $scope.init = function () {
        $rootScope.countOcupat = false;
        $rootScope.countLiber = true;
        $rootScope.countUrgenta = false;
        $rootScope.readyTSFI = true;

        $rootScope.changeURL = function () {
  //          document.getElementById("error").innerHTML = "acum e clar ruta de vina..";
            $location.path('/changeURL');
        };
    };

    document.addEventListener("deviceready", function () {

        $rootScope.error = function () {
            //ngBind
            document.getElementById("error").innerHTML = "A aparut o eroare de conexiune..";
            setTimeout(function () { document.getElementById("error").innerHTML = ""; }, 3000);
        };

        document.getElementById("main").style.background = "rgba(252, 244, 220, 0.5)";
        $("body").css("background-image", "url('../images/verde.jpg')");

        $rootScope.name = localStorage.getItem("name");
        $scope.number = localStorage.getItem("number");

        localStorage.setItem("status",0);
        localStorage.setItem("urgenta",0);
        // Status: 0=liber; 1=ocupat;
        // Urgenta: 0=nu; 1=da;


        $scope.ocupat = function () {
            if ($rootScope.countOcupat == false) {
                $rootScope.countOcupat = true;
                $rootScope.countLiber = false;
                localStorage.setItem("status", 1);
            };
        };

        $scope.liber = function () {

            if ($rootScope.countLiber == false) {
                $rootScope.countOcupat = false;
                $rootScope.countUrgenta = false;
                $rootScope.countLiber = true;
                localStorage.setItem("status", 0);
                localStorage.setItem("urgenta", 0);
            };
        };

        $scope.urgenta= function () {

            if ($rootScope.countUrgenta == false && $rootScope.countOcupat == true) {
                $rootScope.countUrgenta = true;
                localStorage.setItem("urgenta", 1);
            }
            else if ($rootScope.countUrgenta == true) {
                $rootScope.countUrgenta = false;
                localStorage.setItem("urgenta", 0);
            };
        };
        ////////////////////////////////////////////////////////////////
        
        localStorage.setItem("baterie", 100);

        window.addEventListener("batterystatus", onBatteryStatus, false);
        function onBatteryStatus(info) {
            var baterie = info.level;
            localStorage.setItem("baterie", baterie);
            console.log(baterie);
        }

        setInterval(function () {
            document.getElementById("error").innerHTML = ('intra in interval');
            if ($rootScope.readyTSFI == true) {
                document.getElementById("error").innerHTML = ('nu trece de if RTSFI');
                GetGPSCoordinates();
                console.log("interval");
            }
        }, 10000);

        function GetGPSCoordinates() {
            navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
        }
    

        var geolocationSuccess = function (position) {
            console.log('Latitudine: '+ position.coords.latitude + 'Longitudine: ' + position.coords.longitude);
            loc = 'Latitudine: ' + position.coords.latitude + 'Longitudine: ' + position.coords.longitude;
            document.getElementById("error").innerHTML = loc;

            var nume = localStorage.getItem("name");
            var baterie = parseInt(localStorage.getItem("baterie"));
            var status = parseInt(localStorage.getItem("status"));
            var stareUrgenta = parseInt(localStorage.getItem("urgenta"));
            var latitudine = position.coords.latitude;
            var longitudine = position.coords.longitude;
            SendAllInformation(nume, latitudine, longitudine, baterie, status, stareUrgenta);
        };

        function geolocationError(error) {
            console.log(error);

            $rootScope.error();
        }


        //Nume,Latitudine,Longitudine,Baterie,Status,Urgenta
        function SendAllInformation(nume, latitudine, longitudine, baterie, status, stareUrgenta) {

            var informationstring = nume + "," + latitudine + "," + longitudine + "," + baterie + "," + status + "," + stareUrgenta;
            console.log(informationstring);
            document.getElementById("error").innerHTML = informationstring;

            var URL = localStorage.getItem("URL");
            var urlstring = URL + "/api/tracker/SendAllInformation"
            var jqxhr = $.ajax({
                method: 'post',
                url: urlstring,
                data: { information: informationstring },
                //dataType: 'json',
                crossDomain: true,
                jsonp: false
            })
            .done(function () {
                console.log("Success");
                document.getElementById("error").innerHTML = ('succes');
            })

            .fail(function (xhr, textStatus, errorThrown) {
                console.log(xhr.status);
                $rootScope.error();

            });
        };

    }, false);
});