app.controller("controlEjer4",function($scope){
    $scope.tamano="";
    $scope.lista=[];
    $scope.resultado=[];
    $scope.matriz=[];
    $scope.suma="";
    $scope.vector={};
    $scope.escondido=[false,false];
    //Creo los espacions para la matriz
    $scope.aumentar = function(){
        //reinicio de las variables 
        $scope.lista=[];
        $scope.matriz=[];
        $scope.resultado=["","",""];
        //Creo los espacions para la matriz
        for(i=0;i<$scope.tamano;i++){
            $scope.vector={};
            for(x=0;x<$scope.tamano;x++){
                $scope.vector[x]= x ;
            }
            $scope.lista[i]=$scope.vector;
        }
        $scope.escondido[0]=true;
    }

    $scope.calcular = function(){
        //diagonal Derecha
        for(i=0;i<$scope.tamano;i++){
            $scope.suma=Number($scope.matriz[i][i])+Number($scope.suma);
        }
        console.log("Suma Derecha",$scope.resultado[0]);
        $scope.resultado[0]=$scope.suma;
        $scope.suma="";
        //diagonal Izquierda
        $scope.vector={};
        for(i=0;i<$scope.tamano;i++){
            //Este for es un contador en reversa pero solo funciona un loop y pasa al for padre
            for(x=$scope.tamano-1;x>= 0 ;x--){
                $scope.suma=Number($scope.matriz[i][x-i])+Number($scope.suma);
                //guardo el orden de la operacion diagonal izquierda
                $scope.vector[i]=$scope.matriz[i][x-i];
                break;
            }
            
        }
        console.log("Suma Izquierda",$scope.suma);
        $scope.resultado[1]=$scope.suma;
        $scope.resultado[2]=$scope.resultado[0]-$scope.resultado[1];
        $scope.escondido[1]=true;
        //reinicio de el tamaño de la matriz y su ultima suma
        
        $scope.suma="";
    }
});