// a service
angular.module('ngCribs')
    .factory('cribsFactory', function($http){

        // fetch data from view:
        function getCribs() {
            // using http request get function
            return $http.get('data/data.json');
        }

        // return an object that references the function above
        return { getCribs: getCribs }
    })
