
app.controller('controlEjer2' , function($scope){
    // Variables
    $scope.valida=true;
    $scope.tamano="";
    $scope.mensaje={};
    $scope.vectorA={};
    $scope.vectorB={};
    $scope.respuesta={};
    //queda pendiente vector solo con grafica
    $scope.grafica="";
    //Incrementa el numero de campos
    $scope.aumentar=function(){
        console.log("hola");
        for (i=0;i<$scope.tamano;i++){
                $scope.mensaje[i]= i;
            console.log("hola",i);
        }
        //Habilita el boton de calcular
        $scope.valida=false;
    }
    //Calcula la suma de el vector A y el B
    $scope.calcular=function(){
        for(i=0;i<$scope.tamano;i++){
            $scope.respuesta[i] = Number( $scope.vectorA[i]) +  Number($scope.vectorB[i] );
            $scope.grafica="";
            //Se realiza un loop para que genere un grafica
            for(x=0;x< $scope.respuesta[i];x++){
                $scope.grafica+="*";
            }
            console.log("Grafica",$scope.grafica);
            //Concatena el resultado con la grafica
            $scope.respuesta[i]= $scope.respuesta[i] + " : " + $scope.grafica;
            
        }

    }
    
    
    
});