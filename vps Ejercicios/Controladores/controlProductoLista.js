app.controller('controlProducto',function($scope,$http,$uibModal,$log){
    //En este http obtengo de la URL los datos de una tabla Productos
    $scope.init = function(){
        $http.get("https://localhost:44392/api/products").then(function(response){
            $scope.productos = response.data;
            console.log("Productos",response);
        },$scope.mostrarError);

        //$http({    method : "GET",url : "https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json"
        //}).then(function (response) {
        //    $scope.productos = response.data.value;
        //}, function (response) {
        //    $scope.productos = response.statusText;
        //});
    }
    $scope.mostrarError = function(err){
        
        console.log(err);
        alert(err);
    }
    
    //Mostrara una vista con un formulario para poder editar el registro
    $scope.editarProducto = function(id,num){

        console.log("Producto a editar", id);
        var vistaModal = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/productoFormulario.html",
            controller: "Producto",
            size : "lg",
            resolve: {
                idProducto: function(){
                    return id;
                }
            }
        });
        //Se realiza la actualizacion
        vistaModal.result.then(function (producto) {
            console.log("Producto",producto);
            $scope.productos[num] = producto;
            //Se registra cuando se activa el Dismissed
            }, function () {
                
                $log.info('modal dismissed at: ' + new Date());
            });
    }
    // Mostrara un formulario para guardar un producto
    $scope.agregar = function(){
        var vistaModal = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/productoFormulario.html",
            controller: "Producto",
            size : "lg",
            resolve: {
                idProducto: function(){
                    return '0';
                }
            }
        });
        //Se realiza la actualizacion
        vistaModal.result.then(function (producto) {
            console.log("Producto",producto);
            $scope.productos.push(producto);
            //Se registra cuando se activa el Dismissed
            }, function () {
                
                $log.info('modal dismissed at: ' + new Date());
            });
    }

    //se mostrara un mensage de confirmacion de eliminacion
    $scope.eliminar = function(id,index){
        var vistaModal = $uibModal.open({
            animation: true,
            ariaLabelledBy: "modal-title",
            ariaDescribedBy: "modal-body",
            templateUrl: "views/eliminarProducto.html",
            controller: "Producto",
            size : "lg",
            resolve: {
                idProducto: function(){
                    return id;
                }
            }
        });
        //Se realiza la actualizacion
        vistaModal.result.then(function (producto) {
            console.log("Producto",producto);
            $scope.productos.splice(index,1);
            //Se registra cuando se activa el Dismissed
            }, function () {
                
                $log.info('modal dismissed at: ' + new Date());
            });
    }
    $scope.init();
});

