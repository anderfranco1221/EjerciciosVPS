app.service('hexadecimal', function() {
    this.miFuncion = function (x) {
        return x.toString(16);
    }
});
app.filter('miFormato',['hexadecimal', function(hexadecimal) {
    return function(x) {
        return hexadecimal.miFuncion(x);
    };
}]);
app.controller('controlador',function($scope){
    $scope.numeros=[159,213,456,789,453,574,198,575];

});