'use strict';

app.controller('mapCtrl', function($scope, uiGmapIsReady, DataFactory, $location) {
    // Google Map API Stuff Starts Here
    var directionsDisplay,
        directionsService,
        setGMap,
        map,
        mapInstanceNumber,
        searchBox,
        input = document.getElementById('addressLineOne'),
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

    $scope.marker = {
        id: 0,
        coords: $scope.map.center
    };

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
    }; // Google Map API Stuff Ends Here

    $scope.order = {
        address: '',
        address_details: '',
        driver_id: '',
        payment_type: '',
        status: false,
        tel: '',
        tip: '0.00',
        total: ''
    };

    $scope.submitOrder = function() {
        DataFactory.addOrder($scope.order)
            .then((data) => {
                $location.path("/store");
            });
        $scope.order = {};
    };

    $('.money').priceFormat({
        prefix: '',
        thousandsSeparator: '',
        clearOnEmpty: true
    });

});
