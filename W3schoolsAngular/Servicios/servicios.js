app.controller('controladorServicios',function($scope,$http){
    $scope.filtro="";

    $http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
        console.log("Hola", response);
        $scope.miDatos = response.data.records;
    });

});
app.controller('controladorUrl',function($scope,$location){
    $scope.miUrl = $location.absUrl();
})
