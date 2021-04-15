var app = angular.module('misRutas', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.config(function($routeProvider){
    //Rutas de los ejercicios y sus controladores

    $routeProvider
    .when("/",{
        template:"<h1>Bienvenido</h1><br><h3>Escoja uno de los ejercicios Sr/a: {{user.Nombre}}</h3><br>"
    })
    .when("/ejercicio1",{
        templateUrl:"views/Ejercicio1.HTML",
        controller : "controladorEjer1"
    })
    .when("/ejercicio2",{
        templateUrl:"views/ejercicio2.html",
        controller : "controlEjer2"
    })
    .when("/ejercicio3",{
        templateUrl : "views/ejercicio3.html",
        controller : "controlEjer3"
    })
    .when("/ejercicio4",{
        templateUrl: "views/ejercicio4.html",
        controller: "controlEjer4"
    })
    .when("/productoLista",{
        templateUrl: "views/productosLista.html",
        controller: "controlProducto"
    })
    .when("/clienteDetalle",{
        templateUrl: "views/clientesLista.html",
        controller: "controlClienteLista"
    })
    .when("/ordenesLista",{
        templateUrl: "views/ordenesLista.html",
        controller: "controlOrdenes"
    });

});