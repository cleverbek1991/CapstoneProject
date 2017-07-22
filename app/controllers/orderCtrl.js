'use strict';

app.controller('orderCtrl', function($scope, $location, $routeParams, DataFactory, uiGmapIsReady, $route) {

    var directionsDisplay,
        directionsService,
        setGMap,
        map,
        mapInstanceNumber,
        searchBox,
        input = document.getElementById('input'),
        geocoder;

    uiGmapIsReady.promise(1).then(function(instances) {
        instances.forEach(function(inst) {
            map = inst.map;
            mapInstanceNumber = inst.instance;

        });
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsService = new google.maps.DirectionsService();
        searchBox = new google.maps.places.SearchBox(input);
        geocoder = new google.maps.Geocoder();
    });

    $scope.map = {
        control: {},
        center: {
            latitude: 36.174465,
            longitude: -86.767960
        },
        zoom: 9
    };

    $scope.options = {
        scrollwheel: false
    };

    // $scope.marker = {
    //     id: 0,
    //     coords: $scope.map.center
    // };

    $scope.directions = {
        origin: "500 Interstate Boulevard South, Nashville, TN, United States",
        destination: "",
        showList: false
    };

    $scope.getDirections = function() {
        var request = {
            origin: $scope.directions.origin,
            destination: $scope.order.address,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById('directionsList'));
                $scope.directions.showList = true;
            } else {
                console.log('Google route unsuccesfull!');
            }
        });
    };

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
                $route.reload();
            });
        $scope.items = {};
    };

    $scope.deleteOrder = function(orderID) {
        DataFactory.removeOrder(orderID)
            .then(() => {
                $location.path("/orders");
            });
    };

    $scope.getDrivers();
    $scope.order();
});
