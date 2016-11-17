angular.module("projetoTokenLabApp")
.factory('Contact', ['$http', function($http){
    return {
        get_contact: function(id){
            return $http.get(urlpath("contact/"+id));
        },
        new_contact: function(data){
            var formdata = data;
            if(data.formdata.birthday != null){
                data.formdata.birthday = data.formdata.birthday.toISOString().slice(0, 10);
            }

            return $http.post(urlpath("contact/new_contact"), data);
        },
        update_contact: function(data){
            var formdata = data;
            if(data.formdata.birthday != null){
                formdata.birthday = data.formdata.birthday.toISOString().slice(0, 10);
            }

            return $http.post(urlpath("contact/update_contact"), formdata);
        },
        my_contacts: function(){
            return $http.post(urlpath("contact/my_contacts"));
        },
        all_contact: function(){
            return $http.get(urlpath("contact"));
        },
        delete_contact: function(data){
            return $http.post(urlpath("contact/delete_contact"), data);
        },
        search_contact: function(data){
            return $http.post(urlpath("contact/search_contact/"), data);
        }
    };
}]);