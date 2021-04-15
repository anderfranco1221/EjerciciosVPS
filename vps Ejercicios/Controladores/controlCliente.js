app.controller('controlCliente',function($scope,$http,$uibModalInstance,idCliente){
    $scope.cliente=[
        {
            "CompanyName": "",
            "ContactName": "",
            "ContactTitle": "",
            "Phone": "",
            "Fax": "",
            "Country": "",
            "City": "",
            "Address": "",
            "Region": "",
            "PostalCode": ""
        }
    ];
    $scope.mensaje={};
    $scope.orden=[];
    $scope.vista=true;
    $scope.visivilidad = false;
    
    
    // En este Constructor se encuentran los servicios consumidos en este documento (URL)

    $scope.init = function(){

        $http.get("https://localhost:44392/api/customers/"+idCliente).then(function(response){
        $scope.cliente = response.data;

        console.log("Detalle cliente",response);

        //Deja Editar y Muestra el Boton de Editar
        if($scope.cliente != null){

            $scope.vista = false;
            $scope.visivilidad = true;
        }
    });

    }

    //Dejara editar en el formulario 
    $scope.cambiarVisivilidad = function(){

        $scope.visivilidad = false;
        $scope.vista = true;
    }

    $scope.mostrarError = function(err){
        console.log(err);
        alert(err);
    }
    //funcionalidad de Guardar datos  
    $scope.guardar = function(){

        console.log("Guardar cambio",$scope.cliente);

        $http.post("https://localhost:44392/api/customers",$scope.cliente).then(function(response){
            console.log("Cliente Guardado",response);

            $uibModalInstance.close($scope.cliente);
        });
    }

    $scope.eliminar = function(){
        $http.get("https://localhost:44392/api/orders?CustomerID="+customerId).then(function(response){
            $scope.orden = response.data;
        });

        if($scope.orden.length != null){
            $http.delete("https://localhost:44392/api/orders/"+customerId).then(function(response){
                $scope.cliente = response;
            });
        }else{
            $scope.mensaje = ""+$scope.orden.length;
            
        }

    }

    //Cerrar la modal
    $scope.cerrar = function(){

        $uibModalInstance.dismiss("Cancelar");
    }
    $scope.init();
});