(function () {

    function ParentController (scope) {

        // catch an event
        scope.$on('anEvent', ProcessEvent);

        function ProcessEvent (event, data) {

            // broadcast the events to the children's
            scope.$broadcast('parentEvent', data);
        }

    }

    function FirstChildController (scope) {

        // catch event from parent
        scope.$on('parentEvent', function (event, data) {
            this.msg = data.msg;
        }.bind(this))

    }

    function SecondChildController (scope) {

        this.raiseEvent = function () {
            scope.$emit('anEvent', {msg: "Second child raised an event!"});
        };

        // catch event from parent
        scope.$on('parentEvent', function (event, data) {
            this.msg = data.msg;
        }.bind(this))

    }

    angular.module('app', [])
        .controller({
            'ParentController' : ['$scope', ParentController],
            'FirstChildController' : ['$scope', FirstChildController],
            'SecondChildController' : ['$scope', SecondChildController]
        });
}());