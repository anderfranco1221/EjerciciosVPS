app.controller("usuarioControl",function($scope,$uibModal,$log,$rootScope){
    $scope.usuario = {}
    $rootScope.user={}

    //Se envia un post para que realice una validacion de true o false
    $scope.autentificacion = function(){
        var vistaModal = $uibModal.open({
            //animation = true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/autenticacion.html",
            controller: "usuario",
            size : "lg",
            resolve: {
                idUsuario: function(){
                    return 0;
                }
            }
        });

        vistaModal.result.then(function(respuesta){
            $scope.usuario = respuesta;
            $rootScope.user = respuesta;
        },function(){
            $log.info('modal dismissed at: ' + new Date());
        })
    }

    $scope.cerrar = function(){
        $scope.usuario = {}
        $scope.usuario.Autenticado = false;
    }
});

app.controller("usuario",function($scope,$http,$uibModalInstance,idUsuario){
    $scope.usuario={};
    $scope.respuesta={};

    $scope.autenticar = function(){
        console.log("Envio Credenciales",$scope.usuario);
        $http.post("https://localhost:44392/api/Users/",$scope.usuario).then(function(response){
            console.log("autenticacion",response.data);
            $scope.respuesta = response.data;

            if($scope.respuesta.Autenticado){
                $uibModalInstance.close($scope.respuesta);
            }else{
                $scope.usuario={};
            }

        });
    }

    $scope.cerrar = function(){
        $uibModalInstance.dismiss('cancel');
    }
});