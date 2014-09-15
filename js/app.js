angular.module("MyApp", []).controller("DBController", function ($scope, dataService){
	$scope.userName;

	$scope.employeeArray = dataService.getEmployee();

	$scope.addEmployee = function(employeeName, phoneNumber, streetName, cityName, stateName, zipCode){
		
		var eName = employeeName;
		var eNumber = phoneNumber;
		var eStreet = streetName;
		var eCity = cityName;
		var eState = stateName;
		var eZip = zipCode;

		dataService.addEmployee(eName, eNumber, eStreet, eCity, eState, eZip);

		$scope.employeeName = '';
		$scope.phoneNumber = '';
		$scope.streetName = '';
		$scope.cityName = '';
		$scope.stateName = '';
		$scope.zipCode = '';

	};

	$scope.deleteEmployee = function(removeName){
		dataService.removeName(removeName);
	}
});