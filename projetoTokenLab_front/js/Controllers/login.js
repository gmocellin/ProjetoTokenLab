//Controller do login
angular.module('projetoTokenLabApp')
.controller('loginCtrl', function($scope, $rootScope, $location, Notification, Auth, Account, $cookieStore){
    $scope.on_submit = function(){
        var formdata = {
            username : $scope.username,
            password : $scope.password
        };
        console.log(formdata);
        Auth.login(formdata).success(function(data){
            if (data.user){
                Notification.success("Login successfully!");
                Account.me().success(function (data) {
                    setLocalUser(data, $rootScope);
                });
                $location.path("/contacts_list/");
            } else {
                Notification.error("Username or password doesn't match");
            }
        }).catch(function(data){
            Notification.error("Login failed!");
        });
    }
});