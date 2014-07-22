(function () {

    /**
     * parent controller define getName method on it`s prototype
     * @constructor
     */
    function ParentController() {

        this.person = {
            name: "nir",
            email: "nir@gmail.com"
        }
    }

    ParentController.prototype.getName = function () {
        return this.person.name;
    };


    /**
     * child controller holds different person
     * @constructor
     */
    function ChildController () {

        this.person = {
            name: "or",
            email: "or@gmail.com"
        }
    }

    ChildController.prototype = Object.create(ParentController.prototype);


    angular.module('app', [])
        .controller({
            'ParentController' : ParentController,
            'ChildController' : ChildController
        })
}());