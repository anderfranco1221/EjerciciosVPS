
app.controller('controladorEjer1', function($scope){
    //parametros 
        $scope.jugador1 = {nombre: "", estrategia:"", imagen:""};
        $scope.jugador2 = {nombre: "", estrategia:"", imagen:""};
        $scope.resultado='';
        
        $scope.opciones = [
            {id:'1' , nombre: 'Roca o Piedra'},
            {id:'2', nombre: 'Papel'}, 
            {id:'3', nombre:'Tijeras'},
            {id:'4', nombre:'Spock'},
            {id:'5', nombre:'Lagarto'}
        ];
        
        $scope.jugador1.nombre = $scope.user.Nombre;

        //funciones de la logica del juego
        $scope.jugar = function (){
            if($scope.jugador1.estrategia == $scope.jugador2.estrategia){
                $scope.resultado="Es un empate";

            }else{
                switch($scope.jugador1.estrategia){
                    case '1':
                        if($scope.jugador2.estrategia=='3' || $scope.jugador2.estrategia == '5' ){
                            $scope.resultado = 'El Jugador #1: '+ $scope.jugador1.nombre+' Es el ganador ';
                        }else{
                            $scope.resultado = 'El Jugador #2: '+ $scope.jugador2.nombre +' Es el ganador ';
                        }
                    break;
                    case '2':
                        if ($scope.jugador2.estrategia == '1' || $scope.jugador2.estrategia == '5') {
                            $scope.resultado = 'El Jugador #1: '+ $scope.jugador1.nombre+' Es el ganador ';
                        } else {
                            $scope.resultado = 'El Jugador #2: '+ $scope.jugador2.nombre +' Es el ganador ';
                        }
                    break
                    case '3':
                        if ($scope.jugador2.estrategia == '5' || $scope.jugador2.estrategia == '2') {
                            $scope.resultado = 'El Jugador #1: '+ $scope.jugador1.nombre+' Es el ganador '
                        } else {
                            $scope.resultado = 'El Jugador #2: '+ $scope.jugador2.nombre +'Es el ganador ';
                        }
                    break;
                    case '4':
                        if ($scope.jugador2.estrategia == '1' || $scope.jugador2.estrategia == '3') {
                            $scope.resultado = 'El Jugador #1: '+ $scope.jugador1.nombre+' Es el ganador '
                        } else {
                            $scope.resultado = 'El Jugador #2: '+ $scope.jugador2.nombre +' Es el ganador ';
                        }
                    break;
                    case '5':
                        if ($scope.jugador2.estrategia == '4' || $scope.jugador2.estrategia == '2') {
                            $scope.resultado = 'El Jugador #1: '+ $scope.jugador1.nombre+' Es el ganador '
                        } else {
                            $scope.resultado = 'El Jugador #2: '+ $scope.jugador2.nombre +' Es el ganador ';
                        }
                    break;
                    default:
                        $scope.resultado = 'Esperando estrategia ...';
                    break;
                
            }
        }
    } 
    // Observar la imagenes de la estrategia
    $scope.verEstrategia= function(estrategia,jugador){
        switch (estrategia){
            case '1':
                $scope.imagenes="Layout/Imagenes/R.jpg";
                
            break;
            case '2':
                $scope.imagenes="Layout/Imagenes/P.jpg";
                
            break;
            case '3':
                $scope.imagenes="Layout/Imagenes/T.jpg";
                
            break;
            case '4':
                $scope.imagenes="Layout/Imagenes/S.jpg";
                
            break;
            case '5':
                $scope.imagenes="Layout/Imagenes/L.jpg";
                
            break;
            default:
                $scope.imagenes = 'Layout/Imagenes/esperando.gif';
            break;
        }
        if(jugador=='1'){
            $scope.jugador1.imagen=$scope.imagenes;
        }else{
            $scope.jugador2.imagen=$scope.imagenes;
        }
    }
    $scope.limpiar=function(){
        //reinicia las variables que se allan utilizado 
        $scope.jugador1 = {nombre: "", estrategia:"", imagen:""};
        $scope.jugador2 = {nombre: "", estrategia:"", imagen:""};
        $scope.resultado='';
    }
});
