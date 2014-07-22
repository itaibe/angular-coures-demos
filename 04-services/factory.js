(function () {

    /**
     * holds a user and return an API to work with it
     * @returns {{getUser: getUser, setUserName: setUserName}}
     * @constructor
     */
    function UserManager () {

        var User = {
            id: 234556,
            name: "Nir Kaufman",
            email : "nir@500tech.com"
        };

        return {
            getUser : function ( ) {
                return User;
            },

            setUserName : function (userName) {
                User.name = userName
            },

            setUser : function (user) {
                User = user;
            }


        }
    }

    angular.module('services.app')
        .factory('UserManager' ,UserManager)

}());