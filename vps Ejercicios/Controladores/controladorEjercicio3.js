app.controller('controlEjer3',function($scope){

    // Variables declaradas importantes
    $scope.tamano="";
    $scope.arreglo={};
    $scope.resultado={};
    $scope.minMax=["",""];
    // variables declaradas de auxuliares
    $scope.lista={};
    $scope.suma="";
    $scope.auxiliar=["",""];

    //aumentar la lista
    $scope.aumentar = function(){
        for(i=0;i<$scope.tamano;i++){
            $scope.lista[i]=(i);
        }
    }

    $scope.calcular = function(){
        $scope.minMax=["",""];
        for(i=0;i<$scope.tamano;i++){
            //se reinicia la variable a 0
            $scope.suma="";
            $scope.vector={};
            // Se realizá una suma 


            for(x=0;x<($scope.tamano-1);x++){
                $scope.suma= Number($scope.arreglo[x])+Number($scope.suma);
                //Guardo los numeros de las operaciones
                $scope.vector[x]=$scope.arreglo[x];
                
            }
            $scope.lista[i]=$scope.vector;
            console.log("operacion",$scope.lista[i]);

            //se guarda el resultado en un vector o arreglo
            $scope.resultado[i]=$scope.suma;

            //Organiza el vector en orden asendente segun posicion
            $scope.auxiliar[0]=$scope.arreglo[$scope.tamano-1];
            $scope.auxiliar[1]=$scope.arreglo[i];
            $scope.arreglo[i]=$scope.auxiliar[0];
            $scope.arreglo[$scope.tamano-1]=$scope.auxiliar[1];
        }
        //El maximo de los resultados de los vectores
        for(l=0;l<$scope.tamano;l++){
            if($scope.resultado[l] > $scope.minMax[1]){
                $scope.minMax[1]=$scope.resultado[l];
            }
        }
        //coloco el valor maximo en el minimo para que valla restando
        $scope.minMax[0]=$scope.minMax[1];
        //El minimo de los resultados de los vectores
        for(j=0;j<$scope.tamano;j++){
            if($scope.resultado[j]<$scope.minMax[0]){
                $scope.minMax[0]=$scope.resultado[j];
            }
        }
    }
});