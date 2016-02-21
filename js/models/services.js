
app.factory('service', function ($http) {
    return {
        get: function () {
            console.log("inside function");
            return $http.get('js/modules/resume.json');
        }
    };
});

