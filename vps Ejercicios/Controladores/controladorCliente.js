app.controller('controlClienteLista',function($scope,$http,$uibModal,$log){
    $scope.clientes=[];

    //buscar en la URL los datos de la tabla Cliente
    $scope.init = function(){

        $http.get("https://localhost:44392/api/customers").then(function(response){
            $scope.clientes = response.data;
            console.log("Lista de clientes",response);
        },$scope.mostrarError);

    } 

    $scope.mostrarError = function(err){   
        console.log(err);
        alert(err);
    }

    //Ingresara un nuevo Cliente
    $scope.agregar = function(){

        $scope.vistaModal = $uibModal.open({

            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/formularioCliente.html",
            controller: "controlCliente",
            size: "lg",
            resolve: {

                idCliente: function(){
                    return 0;
                }
            }
        });

        $scope.vistaModal.result.then(function(cliente){

            $scope.clientes.push(cliente);
        }, function(){

            $log.info("se ha cerrado el Modal : " + new Date());
        });
    }

    //Mostrara todos los campos del cliente que halla registrado
    //mostrara los datos en un formulario para poder editarlo
    $scope.editarCliente = function(id,index){

        $scope.vistaModal = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal- title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'views/formularioCliente.html',
            controller: 'controlCliente',
            size: 'lg',
            resolve: {

                idCliente: function(){
                    return id;

                }
            }
        });
        $scope.vistaModal.result.then(function (cliente) {

            $scope.clientes[index] = cliente;

            //Se registra cuando se activa el Dismissed
            console.log("Cliente", cliente);
            
            }, function () {

                $log.info('modal dismissed at: ' + new Date());

            });
    }
    $scope.init();
});