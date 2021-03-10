app.directive("primeradiretiva",function(){
    return {
        restrict : "E",
        template : "<h1>Esta es el una directiva !</h1>"
        
    };
});
app.directive("w3TestDirective", function() {
    return {
        restrict : "A",
        template : "<h1>Made by a directive!</h1>"
    };
});