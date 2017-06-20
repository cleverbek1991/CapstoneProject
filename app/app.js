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
	when('/driverA', {
		templateUrl: 'partials/driverAView.html',
		controller: 'driverACtrl'
	})
	.when('/driverB', {
		templateUrl: 'partials/driverBView.html',
		controller: 'driverBCtrl'
	}).
	otherwise('/');
});