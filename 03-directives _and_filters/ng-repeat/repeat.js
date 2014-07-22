(function () {

    function MainController (scope) {

        scope.persons = [
            {id: 52433, name: 'nir kaufman', email: 'nir@gmail.com'},
            {id: 38433, name: 'joe bill', email: 'joe@erez.com'},
            {id: 92876, name: 'ron foo', email: 'ron@foo.uk'},
            {id: 19256, name: 'billy joel', email: 'billy19@walla.com'},
            {id: 62987, name: 'paul simon', email: 'paul.s@gmail.com'},
        ];


    }

    angular.module('app', ['ngAnimate'])
        .controller('MainController', ['$scope', MainController])

}());