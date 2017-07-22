"use strict";

const app = angular.module('manager', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(function(uiGmapGoogleMapApiProvider, FBCreds) {
    uiGmapGoogleMapApiProvider.configure({
        key: FBCreds.googleMapApiKey,
        v: '3.40',
        libraries: 'places, visualization, drawing, geometry'
    });
});

app.config(function($routeProvider) {
	$routeProvider.
	when('/store', {
		templateUrl: 'partials/storeView.html',
		controller: 'mapCtrl'
	}).
	when('/orders', {
		templateUrl: 'partials/orderList.html',
		controller: 'orderListCtrl'
	}).
	when('/orders/:orderID', {
		templateUrl: 'partials/orderDetail.html',
		controller: 'orderCtrl'
	}).
	when('/drivers', {
		templateUrl: 'partials/driverList.html',
		controller: 'driverListCtrl'
	}).
	when('/drivers/:driverID', {
		templateUrl: 'partials/driverView.html',
		controller: 'driverCtrl'
	}).
	otherwise('/');
});