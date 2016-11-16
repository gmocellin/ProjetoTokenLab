angular.module("projetoTokenLabApp")
.factory('Contact', ['$http', function($http){
    return {
        get_contact: function(id){
            return $http.get(urlpath("contact/"+id));
        },
        new_contact: function(formdata){
            data = {formdata: formdata};
            data.formdata.birthday = data.formdata.birthday_date.toISOString().slice(0, 10);

            return $http.post(urlpath("contact/new_contact"), data);
        },
        update_contact: function(formdata){
            data = {formdata: formdata};
            data.formdata.birthday = data.formdata.birthday_date.toISOString().slice(0, 10);

            return $http.post(urlpath("contact/update_contact"), data);
        },
        my_contacts: function(){
            return $http.post(urlpath("contact/my_contacts"));
        },
        all_contact: function(){
            return $http.get(urlpath("contact"));
        },
        delete_contact: function(){
            return $http.post(urlpath("contact/delete_contact"), data);
        },
        //************TESTAR
        search_contact: function(name){
            return $http.get(urlpath("contact/search_user/"+name));
        }
    };
}]);