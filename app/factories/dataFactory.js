"use strict";

app.factory("DataFactory", function($q, $http, FBCreds) {

    const addOrder = (newObj) => {
        return $q((resolve, reject) => {
            let object = JSON.stringify(newObj);
            $http.post(`${FBCreds.databaseURL}/orders.json`, object)
                .then((itemID) => {
                    resolve(itemID);

                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const editOrder = (orderID, editObj) => {
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(editObj);
            $http.patch(`${FBCreds.databaseURL}/orders/${orderID}.json`, newObj)
                .then((itemObj) => {
                    resolve(itemObj);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getOrder = (orderID) => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/orders/${orderID}.json`)
                .then((itemObj) => {
                    resolve(itemObj.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getDriversOrder = (driverID) => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/drivers/${driverID}.json`)
                .then((itemObj) => {
                    resolve(itemObj.data);
                    console.log('getDriversOrder', itemObj);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getOrderList = () => {
        let orders = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/orders.json`)
                .then((orderObj) => {
                    let itemCollection = orderObj.data;
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        orders.push(itemCollection[key]);
                    });
                    resolve(orders);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getDrivers = () => {
        let drivers = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/drivers.json`)
                .then((driverObj) => {
                    let allDrivers = driverObj.data;
                    Object.keys(allDrivers).forEach((key) => {
                        allDrivers[key].driver_id = key;
                        drivers.push(allDrivers[key]);
                    });
                    resolve(drivers);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const removeOrder = (orderID) => {
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/orders/${orderID}.json`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const deleteDriver = (driverID) => {
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/drivers/${driverID}.json`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addDriver = (newDriver) => {
        let driverObj = JSON.stringify(newDriver);
        return $q((resolve, reject) => {
            $http.post(`${FBCreds.databaseURL}/drivers.json`, driverObj)
                .then((obj) => {
                    resolve(obj);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return {
        addDriver,
        addOrder,
        deleteDriver,
        editOrder,
        getOrder,
        getDriversOrder,
        getOrderList,
        getDrivers,
        removeOrder
    };

});
