//controller do edit password
angular.module('projetoTokenLabApp')
.controller('editPasswordCtrl', function($scope, $location, Account, Notification){
    $scope.formdata = {}
    $scope.update_password = function(){
        $scope.formerror = {};
        Account.update_password({"formdata":$scope.formdata}).success(function(data){
            if (data.status == "success"){
                Notification.success("Password changed");
                $location.path("/contacts_list/");
            } else {
                if (data.status == "notpassword") {
                    Notification.error("Old Password doesn't match");
                } else {
                    Notification.error("Couldn't edit Password");
                }
            }
        }).catch(function(data){
            Notification.error("Couldn't edit Password");
        });
    }
});