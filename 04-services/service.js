(function () {


    /**
     * simple service to load and save data to local storage
     * @constructor
     */
    function StorageService () {

        this.saveData = function (key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        };

        this.loadData = function (key) {
            return JSON.parse(localStorage.getItem(key));
        };

    }

    angular.module('services.app')
        .service('StorageService', StorageService)

}());