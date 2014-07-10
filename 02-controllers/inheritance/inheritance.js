(function () {

    function ParentController(scope) {

        scope.person = {
            id: 52334,
            name: 'nir kaufman',
            email: 'nirkaufman@gmail.com'
        };

    }

    function FirstChildController(scope) {

        this.changePerson = function () {
            scope.person.name = "another name";
        }

    }

    function SecondChildController(scope) {}

    angular.module('app', [])
        .controller({
            'ParentController': ['$scope', ParentController],
            'FirstChildController': ['$scope', FirstChildController],
            'SecondChildController': ['$scope', SecondChildController]
        });
}());