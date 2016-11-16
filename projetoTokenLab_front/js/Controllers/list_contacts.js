//Controller da lista de contatos
angular.module('projetoTokenLabApp')
.controller('contactsCtrl', function($scope, $location, Notification, Contact){
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

    $scope.delete_contact = function(){
        Contact.delete_contact();
    };

});
