// ommiting the array dependencies reference makes a refenernce to 'ngCribs'.
// does NOT create a NEW module:
// angular.module('ngCribs', [])
angular.module('ngCribs')
    .controller('cribsController', function($scope, cribsFactory){

        $scope.cribs; // for cribs data

        // default setting:
        $scope.priceInfo = {
            min: 0,
            max: 1000000
        };

        // new listing added:
        $scope.newListing = {};

        // ADD
        $scope.addCrib = function(newListing) {
			newListing.image = 'default-crib';
			$scope.cribs.push(newListing);
			$scope.newListing = {}; // clear input boxes
		}

        // EDIT
        $scope.editCrib = function(crib) {
            console.log("---> crib id: " + crib.id);
			$scope.editListing = true;
			$scope.existingListing = crib;
		}

        // UPDATE
		$scope.saveCribEdit = function() {
			$scope.existingListing = {};
			$scope.editListing = false;
		}

        // DELETE
		$scope.deleteCrib = function(listing) {
			var index = $scope.cribs.indexOf(listing);
			$scope.cribs.splice(index, 1);
			$scope.existingListing = {};
			$scope.editListing = false;
		}

        cribsFactory.getCribs().success(function(data){
            $scope.cribs = data;
        }).error(function(error){
            console.log(error);
        });

    });
