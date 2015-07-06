/*global cordova, module*/

module.exports = {
    add: function (id, username, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "syncloud", "add", [id,username]);
    },
    get: function (id, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "syncloud", "get", [id]);
    },
    update: function (id, username, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "syncloud", "update", [id,username]);
    },
    getAll: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "syncloud", "getAll", []);
    },
    delete: function (id, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "syncloud", "delete", [id]);
    }
};
