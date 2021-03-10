app.controller('contrlIncluid',function($scope,$http){

    $http.get("https://www.w3schools.com/angular/customers.php").then(function (response){
        console.log("Datos", response);
        $scope.misDatos=response.data.records;
    });

});