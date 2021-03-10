
app.controller('ejemploControlador',['$scope', function($scope){
    $scope.mensaje="";
    $scope.TopicNames =[
        {name: "What controller do from Angular's perspective"},
        {name: "Controller Methods"},
        {name: "Building a basic controller"}];
    

    $scope.vector =[
        {nombre: "Juan",edad: "45"},
        {nombre: "sebastian",edad: "5"},
        {nombre: "pepito",edad: "45"}
    ]; 

    $scope.nuevoComentario = {};
    $scope.comentarios=[
        {nombre: "pepito" , comentario: "es juicioso"},
        {nombre: "juanita" , comentario: "es muy alta"}
];

    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        //reinicio la variable para ingresarla a comentarios
        $scope.nuevoComentario= {}
        
    }
}]) ;
