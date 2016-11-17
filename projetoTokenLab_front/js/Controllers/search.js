//Controller de buscar contato
//Não funciona ainda
angular.module('projetoTokenLabApp')
.controller('searchContactCtrl', function($scope, $routeParams, $location, Notification, Contact){
   
    $scope.contacts = [];
    //$scope.searchText = "";
    var data = {}
    data.name = $routeParams.searchText;
    
    Contact.search_contact(data).success(function(data){
        if(data.status=="success"){
            $scope.contacts = data.result;
            //$location.path("/search_contact/");
        } else {
            Notification("Unable to search contacts");
            //$location.path("/contacts_list/");
        }
    }).catch(function(data){
        Notification("Unable to search contacts");
        //$location.path("/contacts_list/");
    });
});
