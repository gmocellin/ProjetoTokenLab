//Controller de buscar contato
angular.module('projetoTokenLabApp')
.controller('searchContactCtrl', function($scope, $routeParams, $location, Notification, Contacts){
   
    $scope.contacts = [];
    errors = 0;
    $scope.searchText = "";
    $scope.text = $routeParams.text; 
    
    Contact.search_contact($routeParams.text).success(function(data){
        if(data.status=="success"){
            $scope.contacts = data.result;
            $location.path("/search_result/");
        } else {
            Notification("Unable to search Posts");
            errors += 1;
            if (errors == 2){
                $location.path("/contacts_list/");
            }
        }
    }).catch(function(data){
        Notification("Unable to search Posts");
        errors += 1;
        if (errors == 2){
            $location.path("/contacts_list/");
        }
    });
});
