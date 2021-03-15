app.controller("controlEjer4",function($scope){
    $scope.tamano="";
    $scope.lista=[];
    $scope.vector={};
    $scope.matriz=[];

    $scope.aumentar = function(){
        for(i=0;i<$scope.tamano;i++){
            $scope.vector={};
            for(x=0;x<$scope.tamano;x++){
                $scope.vector[x]= x ;
            }
            $scope.lista[i]=$scope.vector;
            console.log("longitud",$scope.lista[i]);
        }
    }
});