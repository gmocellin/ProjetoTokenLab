angular.module("projetoTokenLabApp")
.factory('Users', ['$http', function($http){
	return {
		get_user: function(){
			return $http.get(urlpath("user/details/"));
		},
		new_user: function(formdata){		
			data = {formdata: formdata};
			return $http.post(urlpath("user/new_user"), data.formdata);
		},
		all_users: function(){
			return $http.get(urlpath("user"));
		},
		delete_user: function(){
			return $http.post(urlpath("user/delete_user"));
		},
	};
}]);