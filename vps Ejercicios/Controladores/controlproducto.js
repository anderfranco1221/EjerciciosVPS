app.controller("Producto",function($scope,$uibModalInstance,$http,idProducto){

    $scope.categorias = []; 
    $scope.proveedores = []; 
    $scope.producto = {};
    $scope.vista = [true,false];

    $scope.init = function() {
        $http.get("https://localhost:44392/api/Categories").then(function(response){
            console.log("categoria :",response);
            $scope.categorias = response.data;
        },$scope.mostrarError);
        //$http({
        //    method : "GET",
        //        url : "https://services.odata.org/V3/Northwind/Northwind.svc/Categories?$format=json"
        //    }).then(function (response) {
        //        $scope.categorias = response.data.value;
        //    }, $scope.mostrarError);
    
        $http({
            method : "GET",
                url : "https://services.odata.org/V3/Northwind/Northwind.svc/Suppliers?$format=json"
            }).then(function (response) {
                $scope.proveedores = response.data.value;
            }, $scope.mostrarError);

         //Busca en la URL al registro con su ID
        $http.get("https://localhost:44392/api/products/"+(idProducto)).then(function(response){
            $scope.producto = response.data; 

            if($scope.producto != null){
                $scope.vista[1]=true;
                $scope.vista[0]=false;
            }

        },$scope.mostrarError);
        
        
    }
    
    //Me mosatrara una alet de el error identificado en el consumo del servicio $http
    $scope.mostrarError = function(err){
        
        console.log(err);
        alert(err);
    }

    $scope.cambiarVisivilidad = function(){

        $scope.vista[0]=true;
        $scope.vista[1]=false;
    }

    // Guardara los cambios o creara un nuevo registro
    $scope.guardar = function(){

        console.log("Devuelve",$scope.producto);
        
        $http.post("https://localhost:44392/api/products",$scope.producto).then(function(response){
            console.log("Metodo post",response);
            $scope.producto= response.data;

            $uibModalInstance.close($scope.producto);

        },$scope.mostrarError);

    }
    $scope.eliminar = function(id){

        $http.delete("https://localhost:44392/api/products/"+id).then(function(response){
            console.log("Eliminado",response);
        })
        $uibModalInstance.close();
    }
    //En esta funcion se supone que debe salir de la ventana y cancelar todo
    $scope.cancelar = function(){

        $uibModalInstance.dismiss('cancel');
    }

    $scope.init();
});