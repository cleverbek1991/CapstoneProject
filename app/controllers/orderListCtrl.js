'use strict';

app.controller('orderListCtrl', function($scope, DataFactory, $location, $routeParams) {

    $scope.orderList = function() {
        DataFactory.getOrderList()
            .then((orderObj) => {
                $scope.orders = orderObj;
                let arrayCash = [],
                    arrayCharge = [],
                    array = [];
                for (let i in orderObj) {
                    if (orderObj[i].status === true) {
                        let totalString = orderObj[i].total.split('.').join('');
                        let total = parseInt(totalString);
                        array.push(total);
                        if (orderObj[i].payment_type === 'charge') {
                            arrayCharge.push(total);
                        } else {
                            arrayCash.push(total);
                        }
                    }
                }
                let sum = array.reduce((a, b) => a + b, 0).toString();
                let abs = sum.slice(0, -2) + '.' + sum.slice(-2);
                $scope.total = abs;

                let sumCash = arrayCash.reduce((a, b) => a + b, 0).toString();
                let cash = sumCash.slice(0, -2) + '.' + sumCash.slice(-2);
                $scope.totalCash = cash;

                let sumCharge = arrayCharge.reduce((a, b) => a + b, 0).toString();
                let charge = sumCharge.slice(0, -2) + '.' + sumCharge.slice(-2);
                $scope.totalCharge = charge;
            });
    };

    $scope.orderList();
});
