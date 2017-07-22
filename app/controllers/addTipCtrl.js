'use strict';

app.controller('addTipCtrl', function($scope, $route, DataFactory) {

	$scope.order = {
		tip: ''
	};

	$scope.addTip = function(orderID) {
        DataFactory.editOrder(orderID)
            .then((data) => {
                console.log('data', data);
                $route.reload();
            });
    };

});