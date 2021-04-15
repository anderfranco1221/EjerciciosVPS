
app.controller('controlEjer2' , function($scope){
    // Variables
    $scope.escondido={};
    $scope.tamano="";
    $scope.mensaje={};
    $scope.vectorA={};
    $scope.vectorB={};
    $scope.respuesta={};
    $scope.maximo="";
    $scope.vista=[false,false];
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
        $scope.vista[0]=true;
        console.log("Vista", $scope.vista);
    }
    //Esta funcion escoje aleatoriamente de 1 a 100 un valor para los vectores A y B
    $scope.rellenar = function(){
        for(i=0;i<$scope.tamano;i++){
            $scope.vectorA[i]=Math.round(Math.random()*100);
            $scope.vectorB[i]=Math.round(Math.random()*100);
        }
    }
    //Calcula la suma de el vector A y el B
    $scope.calcular=function(){
        $scope.maximo="";
        for(i=0;i<$scope.tamano;i++){
            $scope.respuesta[i] = Number( $scope.vectorA[i]) +  Number($scope.vectorB[i] );
        }
        $scope.vista[1]=true;
        for(x=0;x<$scope.tamano;x++){
            if($scope.maximo<$scope.respuesta[x]){
                $scope.maximo = $scope.respuesta[x]
            }
        }
        console.log("Variable maxima",$scope.maximo);
    }
    
    $scope.limpiar = function(){
        //Reinicia todas las variables y esconde una porcion del HTML
        $scope.escondido={};
        $scope.tamano="";
        $scope.mensaje={};
        $scope.vectorA={};
        $scope.vectorB={};
        $scope.respuesta={};
        $scope.grafica=[];
        $scope.vista=[false,false];
        $scope.maximo="";
        console.log("Limpiar",$scope.vista);
    }
    
});