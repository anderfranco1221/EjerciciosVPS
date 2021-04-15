
app.controller('controlOrdenes',function($scope,$http,$uibModal,$log){
    $scope.ordenes=[];

    $scope.init = function(){

        $http.get("https://localhost:44392/api/orders").then(function(response){
            $scope.ordenes = response.data;
            //console.log("Ordenes",response)
        },$scope.mostrarError);

    }

    //Generara una alerta si hay un error en los Api

    $scope.mostrarError = function(error){

        console.log(error);
        alert(error);

    }

    //agregara la orden y sus detalles
    $scope.agregar = function(){

        $scope.formModal = $uibModal.open({

            animation: true, 
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: 'modal-body',
            templateUrl : 'views/formularioOrden.html',
            controller: 'ordenes',
            size: 'lg',
            resolve: {

                idOrder: function(){
                    return '0';
                }

            }
        });

        $scope.formModal.result.then(function(orden){

            //console.log("Guardando Orden",orden);
            $scope.ordenes.push(orden);

        },function(){

            $log.info("Modal dissmet"+ new Date());

        });
    }
    //Editar la Orden
    $scope.editar = function(idOrden,index){

        $scope.formModal = $uibModal.open({

            animation : true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/formularioOrden.html",
            controller: "ordenes",
            size: "lg",
            resolve:{

                idOrder: function(){
                    return idOrden; 
                }

            }
        });
        $scope.formModal.result.then(function(orden){

            //codigo de ingresar los cambios
            //console.log("   Este es el index",orden);
            $scope.ordenes[index]= orden;

        },function(){

            $log.info("Modal dissmet"+ new Date());

        })
    }

    //En esta funcion mandara un menzaje de confirmacion para poder eliminar la Orden
    $scope.eliminar = function(orderId,index){

        $scope.vistaModal = $uibModal.open({

            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/ordenEliminar.html",
            controller: "ordenes",
            size: "sm",
            resolve:{

                idOrder: function(){
                    return orderId;
                }
            }
        });

        $scope.vistaModal.result.then(function(){
            $scope.ordenes.splice(index, 1);
        },function(){
            $log.info("Modal Cerrado"+ new Date());
        })
    }

    $scope.init();
});