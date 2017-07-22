'use strict';

app.controller("driverListCtrl", function($scope, $route, DataFactory, $location) {

    $scope.driverList = function() {
        DataFactory.getDrivers()
            .then((driverObj) => {
                    $scope.driver = {
                        name: ""
                    };
                $scope.drivers = driverObj;
            });
    };

    $scope.addNewDriver = function() {
        DataFactory.addDriver($scope.driver)
            .then((addedObj) => {
                $scope.driver.name = '';
                $route.reload();
                // $location.path("/store");
            });
    };

    $scope.items = {
        driver_id: '',
        status: false
    };

    $scope.removeDriver = function(driverID) {
    	DataFactory.deleteDriver(driverID, $scope.items)
    		.then(() => {
    			$route.reload();
    		});
    };

    $scope.driverList();

});
