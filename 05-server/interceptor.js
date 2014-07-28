(function () {

    function HttpInterceptor ($q, $log) {
            return {
                // optional method
                'request': function(config) {
                    $log.info('Request interceptor: ');
                    $log.info(config);
                    return config;
                },

                // optional method
                'requestError': function(rejection) {
                    // do something on error
                    if (canRecover(rejection)) {
                        return responseOrNewPromise
                    }
                    return $q.reject(rejection);
                },

                // optional method
                'response': function(response) {
                    // do something on success
                    $log.info('Response interceptor: ');
                    $log.info(response);
                    return response;
                },

                // optional method
                'responseError': function(rejection) {
                    // do something on error
                    if (canRecover(rejection)) {
                        return responseOrNewPromise
                    }
                    return $q.reject(rejection);
                }
            };
    }

    angular.module('server.demo')
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push(HttpInterceptor);
        })


}());