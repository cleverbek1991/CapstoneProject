'use strict';

app.controller("driverCtrl", function($scope, $route, DataFactory, $routeParams) {

    $scope.orderList = function() {
        DataFactory.getOrderList()
            .then((orderObj) => {
                $scope.orders = orderObj;
                let driverOrderList = [],
                    cash = [],
                    card = [],
                    tipArray = [],
                    tip;
                for (let i in orderObj) {
                    if (orderObj[i].driver_id === $routeParams.driverID) {
                        let total = parseInt(orderObj[i].total.split('.').join(''));
                        if (orderObj[i].tip === '') {
                            tip = 0;
                        } else {
                            tip = parseInt(orderObj[i].tip.split('.').join(''));
                            tipArray.push(tip);
                            let tipString = tipArray.reduce((a, b) => a + b, 0).toString();
                            $scope.tipTotal = tipString.slice(0, -2) + '.' + tipString.slice(-2);
                        }
                        driverOrderList.push(total);
                        let sumString = driverOrderList.reduce((a, b) => a + b, 0).toString();
                        $scope.sum = sumString.slice(0, -2) + '.' + sumString.slice(-2);
                        if (orderObj[i].payment_type === 'cash') {
                            cash.push(total);
                            let cashTotalString = cash.reduce((a, b) => a + b, 0).toString();
                            $scope.cashTotal = cashTotalString.slice(0, -2) + '.' + cashTotalString.slice(-2);
                        } else {
                            card.push(total);
                            let cardTotalString = card.reduce((a, b) => a + b, 0).toString();
                            $scope.cardTotal = cardTotalString.slice(0, -2) + '.' + cardTotalString.slice(-2);
                        }
                        $scope.run = driverOrderList.length;

                    }

                }
            });
    };

    $scope.driver = function() {
        DataFactory.getDrivers()
            .then((driverObj) => {
                $scope.drivers = driverObj;
                $scope.driverID = $routeParams.driverID;
            });
    };

    $scope.orderList();
    $scope.driver();


});
