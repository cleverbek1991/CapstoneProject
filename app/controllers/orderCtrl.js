'use strict';

app.controller('orderCtrl', function($scope, $location, $routeParams, DataFactory) {

    $scope.order = function() {
        DataFactory.getOrder($routeParams.orderID)
            .then((orderObj) => {
                $scope.order = orderObj;
                $scope.order.id = $routeParams.orderID;

            });
    };

    $scope.getDrivers = function() {
        DataFactory.getDrivers()
            .then((driverObj) => {
                for (let i in driverObj) {
                    driverObj[i].id = i;
                }
                $scope.drivers = driverObj;
            });
    };

    $scope.items = {
        driver_id: '',
        status: true
    };

    $scope.assignOrder = function(orderID) {

        DataFactory.editOrder(orderID, $scope.items)
            .then((data) => {
                $location.path("/orders/"+orderID);
            });
        $scope.items = {};
    };

    $scope.getDrivers();
    $scope.order();
});
