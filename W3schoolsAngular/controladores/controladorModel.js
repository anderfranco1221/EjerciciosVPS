app.controller('controladorModel',['$scope',function($scope){
    $scope.areglo=[1,2,3,4,5,6,7,8,9];
    $scope.numero="";
    $scope.filtro="";
    $scope.correo="ejemplo@cmd.com"
    $scope.comentarios=[
        {nombre: "pepito" , comentario: "es juicioso"},
        {nombre: "juanita" , comentario: "es muy alta"}
    ];
    $scope.nombre = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
}]);
