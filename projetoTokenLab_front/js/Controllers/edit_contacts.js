angular.module('projetoTokenLabApp')
.controller('editContactCtrl', function($scope, $routeParams, $location, $rootScope, Notification, Contact){
    
    $scope.contact = {};
    Contact.get_contact($routeParams.id).success(function(data){
        $scope.contact = data;
    }).catch(function(data){
        Notification.error("Unable to load post");
        $location.path("/contacts_list/");
    });

    $scope.contacts_list = function(){
        $scope.contact.user = $rootScope.localUser.user.id;
        Contact.edit_contact({"formdata": $scope.formdata}).success(function(data){
            if(data.status=="error") {
                Notification.error("Unable to edit post");
            } else {
                Notification.success("Contact edited");
                $location.path("/contacts_list/");
            }
        }).catch(function(data){
            Notification.error("Unable to edit post");
        });
    }
});