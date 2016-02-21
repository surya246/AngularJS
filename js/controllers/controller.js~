
app.controller('resCtrl', function ($scope, service) {
	service.get().then(function (obj) {
	        $scope.obj = obj;
		console.log(Object.keys($scope.obj.data));
		$scope.keys = Object.keys($scope.obj.data);
	});
});


/*app.controller('tabCtrl', function($scope, $http) {
    $http.get("js/modules/resume.json")
    .then(function (obj) {$scope.data = obj.data.education[0];});
});*/
