//Controller da lista de contatos
angular.module('projetoTokenLabApp')
.controller('contactsCtrl', function($scope, $route, $location, Notification, Contact){
    $scope.contacts = [];
    Contact.my_contacts().success(function(data){
        if (data.status == "error"){
            Notification.error("Unable to load contacts");
        } else {
            $scope.contacts = data.result;
        }
    });
    $scope.add_contact = function(){
        $location.path('/new_contact/');
    };

    /*$scope.edit_contact = function(){
        $location.path('/edit_contact/');
    };*/

    $scope.delete_contact = function(id){
        $("#delete-modal-"+id).modal('hide');
        data = {};
        data.id = id;
        Contact.delete_contact(data).success(function(data){
            if(data.status=="success"){
                Notification.success("Contact deleted");
                $route.reload();
            } else {
                Notification.error("Unable to delete");
            }
        }).catch(function(data){
            Notification.error("Unable to delete");
        });

    };
});
