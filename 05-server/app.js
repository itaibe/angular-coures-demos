(function () {

    function MainController(scope, http, resource) {

        var PostResource = resource('http://localhost:3000/posts/');

        var posts = PostResource.query(function () {

                var post = posts[0];

                post.extraData = "extra data";

                var post2 = posts[1];

                post.$save();

                console.log(post);
            }

        );




//        http.get('http://localhost:3000/posts')
//            .success(function(result){
//                scope.posts = result;
//            });


        // transform response example
//        http({
//            method: 'GET',
//            url: 'http://localhost:3000/posts',
//            transformResponse: function (data) {
//                data = JSON.parse(data);
//                data = _.map(data, function (post) {
//                    return {userId: post.id, title: post.title}
//                });
//
//                return data;
//            }
//        }).success(function (result) {
//            scope.posts = result;
//        })


    }

    angular.module('server.demo', ['ngResource'])
        .controller('MainController', ['$scope', '$http', '$resource', MainController]);
}());