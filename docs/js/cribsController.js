// ommiting the array dependencies reference makes a refenernce to 'ngCribs'.
// does NOT create a NEW module:
// angular.module('ngCribs', [])
angular.module('ngCribs')
    //                             dependency injection of $scope object
    .controller('cribsController', function($scope){

        $scope.cribs = [
            {
            "id": 1,
            "type": "Condo",
            "price": 220000,
            "address": "213 Grove Street",
            "description": "Excellent place, really nice view!",
            "details": {
            "bedrooms": 2,
            "bathrooms": 1.5,
            "area": 921
            },
            "image":"crib-1"
            },
            {
            "id": 2,
            "type": "House",
            "price": 410500,
            "address": "7823 Winding Way",
            "description": "Beautiful home with lots of space for a large family.",
            "details": {
            "bedrooms": 4,
            "bathrooms": 3,
            "area": 2145
            },
            "image":"crib-2"
            },
            {
            "id": 3,
            "type": "Duplex",
            "price": 395000,
            "address": "834 River Lane",
            "description": "Great neighbourhood and lot's of nice green space.",
            "details": {
            "bedrooms": 3,
            "bathrooms": 2.5,
            "area": 1500
            },
            "image":"crib-3"
            }
        ]
    })
