//Controller de Cadastro
angular.module('projetoTokenLabApp').controller('signUpCtrl', function($scope, $location, Users, Notification){
    $scope.formerror = {};
    $scope.formdata = {};
    $scope.sign_up = function(){
        $scope.formerror = {};
        if($.trim($scope.formdata.username).length == 0){
            $scope.formerror.username = "You can't use only white spaces.";
        } else {
            Users.new_user($scope.formdata).success(function(data){
                if(data.status == "error"){
                    Notification.error("Couldn't create user");
                } else {
                    Notification.success("User created");
                    $location.path("/login/");
                }
            });
        }
    }
});