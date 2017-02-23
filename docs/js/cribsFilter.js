angular
	.module('ngCribs')
	.filter('cribsFilter', function() {
		//              listings = crib
		return function(listings, priceInfo) {

			var filtered = [];

			var min = priceInfo.min; //ng-model="priceInfo.min" option index.html
			var max = priceInfo.max; //ng-model="priceInfo.max" option index.html

			// angular's forEach helper function:
			angular.forEach(listings, function(listing) {

				if(listing.price >= min && listing.price <= max) {

					filtered.push(listing);
				}
			});

			return filtered;
		}
	});
