'use strict';

/**
 * @ngdoc service
 * @name angularPortfolioApp.getBikes
 * @description
 * # getBikes
 * Factory in the angularPortfolioApp.
 */
angular.module('angularPortfolioApp')
    .factory('getBikesData', function($http) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        var APIkeyDublinBike = "cd68da53009a674d943220ef0a67623682aa00ce";
        return {
            getListBike: function() {
                return $http.get("https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=" + APIkeyDublinBike);
            },

            getCityList: function() {
                return $http.get("https://api.jcdecaux.com/vls/v1/contracts?&apiKey=" + APIkeyDublinBike)
            },

            getCityBike: function(station) {
                return $http.get("https://api.jcdecaux.com/vls/v1/stations?contract=" + station + "&apiKey=" + APIkeyDublinBike);

            }
        };
    });