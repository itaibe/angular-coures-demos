(function () {

    function MessageManager () {

        var options = {
            useAlert: false,
            logToConsole: true
        };

        this.setOptions = function (_options) {
            angular.extend(options, _options);
        };

        this.$get = function ($log, $window) {

            return {

                log : function (msg) {

                    if(options.logToConsole) {
                        $log.debug(msg);
                    }

                    if(options.useAlert) {
                        $window.alert(msg);
                    }
                }
            }

        };
    }

    angular.module('services.app')
        .provider('MessageManager', MessageManager);

}());
