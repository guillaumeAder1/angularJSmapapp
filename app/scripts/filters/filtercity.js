'use strict';

/**
 * @ngdoc filter
 * @name angularPortfolioApp.filter:filterCity
 * @function
 * @description
 * # filterCity
 * Filter in the angularPortfolioApp.
 */
angular.module('angularPortfolioApp')
    .filter('filterCity', function() {
        return function(input) {

            return 'filterCity filter: ' + input;
        };
    });