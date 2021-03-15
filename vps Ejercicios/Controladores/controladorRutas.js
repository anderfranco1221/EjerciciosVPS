var app = angular.module('misRutas', ['ngRoute']);
app.config(function($routeProvider){
    //Rutas de los ejercicios y sus controladores
    $routeProvider
    .when("/",{
        template:"<h1>Escoja uno de los ejercicios</h1>"
    })
    .when("/ejercicio1",{
        templateUrl:"Ejercicio1.HTML",
        controller : "controladorEjer1"
    })
    .when("/ejercicio2",{
        templateUrl:"ejercicio2.html",
        controller : "controlEjer2"
    })
    .when("/ejercicio3",{
        templateUrl : "ejercicio3.html",
        controller : "controlEjer3"
    })
    .when("/ejercicio4",{
        templateUrl: "ejercicio4.html",
        controller: "controlEjer4"
    });
});