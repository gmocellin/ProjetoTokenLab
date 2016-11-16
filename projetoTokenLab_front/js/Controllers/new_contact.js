//Controller de Adicionar Contato 
angular.module('projetoTokenLabApp')
.controller('newContactCtrl', function($scope, $routeParams){
    $scope.formdata = {}; 
    $scope.add_contact = function(){
        Contact.new_contact({"formdata": $scope.formdata}).success(function(data){
            if(data.status=="error") {
                Notification.error("Unable to create post");
            } else {
                Notification.success("Contact created");
                $location.path("/contacts_list/");
            }
        }).catch(function(data){
            Notification.error("Unable to create post");
        });
    }
});