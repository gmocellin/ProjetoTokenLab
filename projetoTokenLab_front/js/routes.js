//Routes
angular.module('projetoTokenLabApp')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
          templateUrl: 'index.html',
          controller: 'indexCtrl'
    })
    .when('/login/', {
        templateUrl: 'template/login.html',
        controller: 'loginCtrl'
    })
    .when('/contacts_list/', {
        templateUrl: 'template/contacts_list.html',
        controller: 'contactsCtrl'
    })
    .when('/new_contact/', {
        templateUrl: 'template/new_contact.html',
        controller: 'newContactCtrl'
    })
    .when('/edit_contact/:id', {
        templateUrl: 'template/edit_contact.html',
        controller: 'editContactCtrl'
    })
    .when('/signup/', {
        templateUrl: 'template/signup.html',
        controller: 'signUpCtrl'
    })
    .when('/edit_user/', {
        templateUrl: 'template/edit_user.html',
        controller: 'editUserCtrl'
    })
    .when('/change_password/', {
        templateUrl: 'template/edit_password.html',
        controller: 'editPasswordCtrl'
    })
    .when('/search/:text', {
        templateUrl: 'template/search_result.html',
        controller: 'searchContactCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
    
    $locationProvider.html5Mode(true);
}]);
