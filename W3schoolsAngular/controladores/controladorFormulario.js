app.controller("formulario", function($scope,$http){
    $scope.usuario={}
    
    
    $http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
        console.log("Hola", response);
        $scope.misDatos = response.data.records;
    });
    $scope.agregarUsuario = function(){
        $scope.misDatos.push($scope.usuario);
        $scope.usuario={};
    }
    $scope.eliminar=function(x){
        $scope.misDatos.splice(x,1);
    }
});