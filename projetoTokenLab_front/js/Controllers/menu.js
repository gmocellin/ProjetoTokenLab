//Controller do menu
angular.module('projetoTokenLabApp')
.controller('menuCtrl', function($scope, $location){
    $location.path("/login/");
});
