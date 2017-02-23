// ommiting the array dependencies reference makes a refenernce to 'ngCribs'.
// does NOT create a NEW module:
// angular.module('ngCribs', [])
angular.module('ngCribs')
    .controller('cribsController', function($scope, cribsFactory){

        $scope.cribs; // for cribs data

        $scope.priceInfo = {
            min: 0,
            max: 1000000
        }

        cribsFactory.getCribs().success(function(data){
            $scope.cribs = data;
        }).error(function(error){
            console.log(error);
        });

    });
