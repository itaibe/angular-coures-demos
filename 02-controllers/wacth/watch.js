(function () {

    function MainController(scope) {

        scope.items = [];

        this.addItem = function (item) {
            scope.items.push({name: item.name});
            this.item = {}
        }.bind(this);


        /* watch the item array for changes. we need to add true to make it work*/
        scope.$watch('items', function (newVal, oldVal) {

            if (oldVal != newVal) {
                console.log("new item add!");
                console.log(newVal);
            }

        }, true);

    }

    angular.module('app', [])
        .controller('MainController', ['$scope', MainController]);
}());