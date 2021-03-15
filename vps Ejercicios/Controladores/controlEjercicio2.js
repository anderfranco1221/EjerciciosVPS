
app.controller('controlEjer2' , function($scope){
    // Variables
    $scope.escondido={};
    $scope.tamano="";
    $scope.mensaje={};
    $scope.vectorA={};
    $scope.vectorB={};
    $scope.respuesta={};
    $scope.grafica=[];
    $scope.escondido[0]=false;
    $scope.escondido[1]=false;
    //Variable Axuliar que guarda grafica de una respuesta
    $scope.axugrafica="";
    //Incrementa el numero de campos
    $scope.aumentar=function(){
        $scope.mensaje={};
        console.log("lista", $scope.mensaje);
        for (i=0;i<$scope.tamano;i++){
                $scope.mensaje[i]= i;
            console.log("hola",i);
        }
        //Habilita el boton de calcular
        $scope.escondido[0]=true;
    }
    //Calcula la suma de el vector A y el B
    $scope.calcular=function(){
        for(i=0;i<$scope.tamano;i++){
            $scope.respuesta[i] = Number( $scope.vectorA[i]) +  Number($scope.vectorB[i] );
            $scope.axugrafica="";
            //Se realiza un loop para que genere un grafica
            for(x=0;x< $scope.respuesta[i];x++){
                $scope.axugrafica+="*";
            }
            $scope.grafica[i]=$scope.axugrafica;

            
        }
        $scope.escondido[1]=true;
    }
    
    
    
});