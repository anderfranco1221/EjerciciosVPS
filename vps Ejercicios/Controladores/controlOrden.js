app.controller('ordenes',function($scope,$http,$uibModalInstance,idOrder){

    $scope.orden={};

    //Indico la estructura del arreglo para que el calculo de totales se incluya el OrdenDetalle
    $scope.ordenDetalle={
        "Discount": 0,
        "ProductID": 0,
        "Quantity": 0,
        "UnitPrice": 0
    };

    //Variables para los select
    $scope.clientes=[];
    $scope.empleados=[];
    $scope.enviosVia=[];
    $scope.productos=[];

    //Variables para autocompletar campos
    $scope.cliente={};
    $scope.empleado={};
    $scope.envioVia={};
    $scope.producto = {};

    //Variables para eliminar 
    $scope.envioProductos=[];

    $scope.visivilidad=false;
    $scope.vista=true;

    
    $scope.total=0;

    //Inicializo los servicios en un metodo constructor
    $scope.init = function(){
        
        //Muestra solamente un registro de la orden con sus detalles
            $http.get("https://localhost:44392/api/orders/"+idOrder).then(function(response){
                $scope.orden = response.data;

                console.log("La orden",response);

                //si la consulta es diferente a null podra ingresar datos de lo contrario no
                if($scope.orden != null){

                    $scope.visivilidad=true;
                    $scope.vista=false;
                    $scope.envioProductos=$scope.orden.Order_Details;
                    $scope.orden.RequiredDate= new Date($scope.orden.RequiredDate);
                }
    
            },$scope.mostrarError);
        
        //Muestra las opciones necesarrias para la eleccion de cliente, empleado y Shippers

        $http.get("https://localhost:44392/api/customers").then(function(response){
            //console.log("Clientes",response);
            $scope.clientes = response.data;
        },$scope.mostrarError);

        $http.get("https://localhost:44392/api/employees").then(function(response){
            //console.log("Empleados",response);
            $scope.empleados = response.data;
        });

        $http.get("https://localhost:44392/api/shippers").then(function(response){
            //console.log("Shippers",response);
            $scope.enviosVia = response.data;
        });

        $http.get("https://localhost:44392/api/products").then(function(response){
            //console.log("Producto",response);
            $scope.productos = response.data;
        });
        

    }

    //Autocompletara con los datos del usuario el destino del envio
    $scope.autocompletarDatosEnvio = function(idcliente){

        $http.get("https://localhost:44392/api/customers/"+idcliente).then(function(response){
            $scope.cliente = response.data;
            //console.log("Cliente Elegido", response);

            // Le ingreso los valores de contacto de cliente a destino de la orden
            $scope.orden.ShipCountry = $scope.cliente.Country;
            $scope.orden.ShipCity = $scope.cliente.City;
            $scope.orden.ShipAddress = $scope.cliente.Address;
            $scope.orden.ShipRegion = $scope.cliente.Region;
            $scope.orden.ShipPostalCode = $scope.cliente.PostalCode;
            
        });

        console.log("Registro de la orden para Envio",$scope.orden);
    }

    //autocompletara con datos del producto el valor del producto
    $scope.autocompletarProductos = function(idproducto,estado){

        $http.get("https://localhost:44392/api/products/"+idproducto).then(function(response){
            $scope.producto = response.data;

            if(estado == null){

                $scope.ordenDetalle.UnitPrice = $scope.producto.UnitPrice; 
            }else{

                $scope.envioProductos[estado].UnitPrice = $scope.producto.UnitPrice;
            }
            

        },$scope.mostrarError);

    }

    //calcula el Sub Total y el total de las ordenes pedidas
    $scope.calcularTotales = function(){

        $scope.total=0;

        //Este for calculara los subtotales segun los Detalles que se encuetren en envioProductos
        for(i=0;i<$scope.envioProductos.length; i++){
            
            $scope.envioProductos[i].subTotal = (parseInt($scope.envioProductos[i].Quantity * 
                ($scope.envioProductos[i].UnitPrice - 
                    ($scope.envioProductos[i].UnitPrice * $scope.envioProductos[i].Discount))));

        }
    
        //Calcula el subtotal de el ordenDetalle cuando sea diferente a cero
        //if($scope.ordenDetalle.Quantity != 0){
//
        //    $scope.ordenDetalle.push($scope.ordenDetalle.Quantity*
        //        ($scope.ordenDetalle.UnitPrice-
        //            ($scope.ordenDetalle.UnitPrice * $scope.ordenDetalle.Discount)));
        //    //console.log("Detalle", $scope.subTotales);
        //}

        //console.log("sub Total",$scope.envioProductos);
        $scope.envioProductos.forEach($detalle=>{
            $scope.total += $detalle.subTotal;
        })
        
        //console.log("Total", $scope.total);
        
    }


    //Dejara ingresar en los campos datos para poder editar y agregar nuevos datos
    $scope.cambiarVisivilidad = function(){

        $scope.visivilidad=false;
        $scope.vista=true;

    }

    //Ingreso a una lista los productos seleccionados en los detalles de la orden
    $scope.ingresarProductos = function(){

        $scope.ordenDetalle.Discount = 0;
        $scope.envioProductos.push($scope.ordenDetalle);
        $scope.ordenDetalle={
            "Discount": 0,
            "ProductID": 0,
            "Quantity": 0,
            "UnitPrice": 0
        };

    }
    
    //quitara de la lista de detalles los productos
    $scope.quitarProducto = function(x){

            $scope.subTotales[x]='';
            //$scope.envioProductos[x].Quantity= '';
            //$scope.orden.Order_Details[x] = $scope.envioProductos[x];
            $scope.envioProductos.splice(x, 1);

    }
    //Se realiza la resta o la suma de el producto ordenado segun eliminan orden o agregen
    $scope.calcularStockProducto = function(ordenDetal,estado){

        $scope.producto={};
        $http.get("https://localhost:44392/api/products/"+ordenDetal.ProductID).then(function(response){
        $scope.producto = response.data;
        
        console.log("Producto",$scope.producto);

            if(estado == 2){
                //condicion para restar unidades de almacenamiento
                console.log("index ?",ordenDetal);
                if($scope.envioProductos.Quantity> ordenDetal.Quantity){

                    if($scope.producto.UnitsOnOrder > ordenDetal.Quantity){

                    }
                    $scope.producto.UnitsOnOrder =  $scope.producto.UnitsOnOrder - ordenDetal.Quantity;
                }else{

                    $scope.producto.UnitsOnOrder =  $scope.producto.UnitsOnOrder + ordenDetal.Quantity;
                }
                
                console.log("Editar Producto",$scope.producto);
                
            }else{
            //condicion para agregar unidades para almacenamiento
                if($scope.producto.UnitInStock)
                
                $scope.producto.UnitsOnOrder = ordenDetal.Quantity + $scope.producto.UnitsOnOrder;
                //console.log("Producto Editado",$scope.producto);
            }   
        
        
        $http.post("https://localhost:44392/api/products",$scope.producto).then(function(response){
            //console.log("Editado Producto",response);
        },$scope.mostrarError);},$scope.mostrarError);

    }
    //Guardara los cambios realizados o nuevos registros
    $scope.guardarOrden = function(){

        if($scope.orden.OrderID != null){
            $scope.envioProductos.forEach($detalle=>{
                
                    $detalle.OrderID = $scope.orden.OrderID;
                    console.log("Detalle nuevo a guardar",$detalle)
                
            })
        }

        $scope.orden.Order_Details = {};
        $scope.orden.Order_Details = $scope.envioProductos;
        

        //Asingna un fecha de creado que sera el dia actual
        if($scope.orden.OrderDate == null){
            $scope.orden.OrderDate = new Date();
        }

        //Ingresa la cantidad ordenada en productos
        if(idOrder == null){
            $scope.envioProductos.forEach(element => {
                $scope.calcularStockProducto(element,1);
            });
        }else{
            $scope.envioProductos.forEach(element => {
                //$scope.calcularStockProducto(element,2);
            });
        }
        console.log("Orden a Editar", $scope.orden);
        $http.post("https://localhost:44392/api/orders",$scope.orden).then(function(response){
            //console.log("Orden Guardado",response.data);
            
            $uibModalInstance.close(response.data);
        })
    }

    //Eliminar Orden
    $scope.eliminar = function(idOrden){

        $scope.orden.Order_Details.forEach(element => {
            $scope.calcularStockProducto(element,2);
        });

        $http.delete("https://localhost:44392/api/orders/"+idOrden).then(function(response){
            //console.log(response);
            $uibModalInstance.close(response);
        });

        
    }
    //Cierra el modal
    $scope.cerrar = function(){

        $uibModalInstance.dismiss('cancel');

    }

    //Funcion muestra el Error en el servicio 
    $scope.mostrarError = function(err){

        console.log(err);
        alert(err);

    }

    $scope.init();
});