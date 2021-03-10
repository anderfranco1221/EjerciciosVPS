app.controller('controladorDOM', function($scope){
    $scope.contador=0;
    $scope.contar=0;
    $scope.tabla={};
    $scope.resultado=[0];
    $scope.interruptor=false;
    $scope.calcular = function(){
        
        for(i=1;i<= $scope.tabla.tamano; i++){
            $scope.resultado.push($scope.tabla.numero * (i+1-1) );
        }
        $scope.interruptor=true
    }
});