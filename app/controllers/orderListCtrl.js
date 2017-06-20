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
                let sum = array.reduce((a, b) => a + b, 0);
                let sumString = sum.toString();
                let abs = sumString.slice(0, -2) + '.' + sumString.slice(-2);
                $scope.total = abs;

                let sumCash = arrayCash.reduce((a, b) => a + b, 0);
                let sumStringCash = sumCash.toString();
                let cash = sumStringCash.slice(0, -2) + '.' + sumStringCash.slice(-2);
                $scope.totalCash = cash;

                let sumCharge = arrayCharge.reduce((a, b) => a + b, 0);
                let sumStringCharge = sumCharge.toString();
                let charge = sumStringCharge.slice(0, -2) + '.' + sumStringCharge.slice(-2);
                $scope.totalCharge = charge;
            });
    };

    $scope.orderList();
});
