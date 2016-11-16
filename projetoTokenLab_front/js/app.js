var app = angular.module('projetoTokenLabApp', [
    'ngRoute',
    'ui-notification',
    'ngCookies'
]).config(['$httpProvider',function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]).run(['$rootScope', 'Account', '$location', 'Notification', function($rootScope, Account, $location, Notification){
    Account.me().success(function(data){
        if (data.status == "success"){
            setLocalUser(data, $rootScope);
            //$location.path("/contact_list/");
        } else {
            Notification.error("Please, authenticate yourself");
            $location.path("/login/");
        }
    }).catch(function(data){
        Notification.error("Please, authenticate yourself");
        $location.path("/login/");
    }); 
}]);
