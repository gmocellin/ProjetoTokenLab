angular.module('projetoTokenLabApp').controller('editUserCtrl', function($scope, $location, Users, Account, Notification){
    $scope.formerror = {};
    $scope.formdata = {};
    Account.me().success(function(data){
        if(data.status=='success'){
            $scope.formdata = data.user;
        } else {
            Notification.error("Unable to locate profile");
        }
    }).catch(function(data){
        Notification.error("Unable to locate profile");
    });

    $scope.edit_user = function(){
        $scope.formerror = {};
        if($.trim($scope.formdata.username).length == 0){
            $scope.formerror.username = "You can't use only white spaces.";
        } else {
            console.log($scope.formdata);
            Account.update_user($scope.formdata).success(function(data){
                if (data.status == "success"){
                    Notification.success("User updated");
                    $location.path("/contacts_list/");
                } else {
                    Notification.error("Couldn't edit user");
                }
            }).catch(function(data){
                Notification.error("Couldn't edit user");
            });
        }
    };
      
    $scope.change_password = function(){
        $location.path('/change_password/');
    };

    $scope.delete_user = function(){
        Users.delete_user().success(function(data){
            if (data.status=="success"){
                Notification.success("User deleted");
                $location.path('/login/');
            } else {
                Notification.error("Unable to delete");
            }
        }).catch(function(data){
            Notification.error("Unable to delete");
        });
        
    };

});