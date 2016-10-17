(function () {

    var app = angular.module('countryApp', []);
    
    app.controller('CountryController', function ($scope, $http) {
        $scope.countries;

        $http.get("/web/country/")
            .then(function successCallback(response) {
                console.log(response);
                $scope.countries = response.data.objects;
                console.log($scope.countries);

                },
                function errorCallback(response) {
                    console.log("error in angular foto " + response);
            });
    });
})();;;