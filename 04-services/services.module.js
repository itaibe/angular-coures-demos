(function () {

    /**
     * example controller that use services
     * @param scope
     * @param user
     * @param storage
     * @param msgs
     * @constructor
     */
    function ServicesController(scope, user, storage, msgs) {
        msgs.log('test');
    }


    // define module
    angular.module('services.app', [])

        .controller('ServicesController', [
            '$scope',
            'UserManager',
            'StorageService',
            'MessageManager'
            , ServicesController]);

}());
