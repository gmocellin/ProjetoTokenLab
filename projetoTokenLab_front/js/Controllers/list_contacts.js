//Controller da lista de contatos
angular.module('projetoTokenLabApp')
.controller('contactsCtrl', function($scope, $location, Post, Notification){
    $scope.contacts = [];
    Contact.my_contacts().success(function(data){
        if (data.status == "error"){
            Notification.error("Unable to load timeline");
        } else {
            $scope.contacts = data.result;
        }
    });
});
