angular.module('projetoTokenLabApp').controller('editContactCtrl', function($scope, $routeParams, $location, $rootScope, Notification, Contact){
    $scope.formerror = {};
    $scope.formdata = {};
    Contact.get_contact($routeParams.id).success(function(data){
        $scope.formdata = data;
        $scope.formdata.birthday = new Date($scope.formdata.birthday);
    }).catch(function(data){
        Notification.error("Unable to load contact");
        $location.path("/contacts_list/");
    });

    $scope.edit_contact = function(){
        $scope.formerror = {}
        $scope.formdata.user = $rootScope.localUser.user.id;
        Contact.update_contact({"formdata": $scope.formdata}).success(function(data){
            if(data.status=="error") {
                Notification.error("Unable to edit contact");
            } else {
                Notification.success("Contact edited");
                $location.path("/contacts_list/");
            }
        }).catch(function(data){
            Notification.error("Unable to edit contact");
        });
    }
});