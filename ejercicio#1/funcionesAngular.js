
var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', function($scope){
    //parametros 
        $scope.jugador1 = {nombre: "", estrategia: ""};
        $scope.jugador2 = {nombre: "", estrategia:""}
        $scope.resultado='';
        $scope.imagen="";
        $scope.opciones = [{id:'1' , nombre: 'Roca o Priedra'},
                        {id:'2', nombre: 'Papel'},
                        {id:'3', nombre:'Tijeras'},
                        {id:'4', nombre:'Spock'},
                        {id:'5', nombre:'Lagarto'}
                        ];
        
        //funciones de la logica del juego
        $scope.jugar = function (){
            if($scope.jugador1.estrategia == $scope.jugador2.estrategia){
                console.log("hola")
                $scope.resultado="Es un empate";

            }else{
                switch($scope.jugador1.estrategia){
                    case '1':
                        if($scope.jugador2.estrategia=='3' || $scope.jugador2.estrategia == '4' ){
                            $scope.resultado = 'El Jugador #1 es el ganador ';
                        }else{
                            $scope.resultado = 'El Jugador #2 es el ganador ';
                        }
                    break;
                    case '2':
                        if ($scope.jugador2.estrategia == '1' || $scope.jugador2.estrategia == '5') {
                            $scope.resultado = 'El Jugador #1 es el ganador ';
                        } else {
                            $scope.resultado = 'El Jugador #2 es el ganador ';
                        }
                    break
                    case '3':
                        if ($scope.jugador2.estrategia == 'S' || $scope.jugador2.estrategia == '2') {
                            $scope.resultado = 'El Jugador #1 es el ganador '
                        } else {
                            $scope.resultado = 'El Jugador #2 es el ganador ';
                        }
                    break;
                    case '4':
                        if ($scope.jugador2.estrategia == '1' || $scope.jugador2.estrategia == '3') {
                            $scope.resultado = 'El Jugador #1 es el ganador '
                        } else {
                            $scope.resultado = 'El Jugador #2 es el ganador ';
                        }
                    break;
                    case '5':
                        if ($scope.jugador2.estrategia == '4' || $scope.jugador2.estrategia == '2') {
                            $scope.resultado = 'El Jugador #1 es el ganador '
                        } else {
                            $scope.resultado = 'El Jugador #2 es el ganador ';
                        }
                    break;
                    default:
                        $scope.resultado = 'Esperando estrategia ...';
                    break;
                }
                
        }

        }
 
        $scope.verEstrategia = function (){
            $scope.opciones = ['R','P','T','S','L'];
            for(i='0';i<=  ($scope.opciones.length);i++){
                if($scope.opciones[i] == $scope.estrategiaUno){
                    $scope.imagen= "'Imagenes\' + opciones[i]+'.jpg'";
                }
            }
        } 
    }]);