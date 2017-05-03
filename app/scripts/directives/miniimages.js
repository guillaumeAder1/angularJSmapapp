'use strict';

/**
 * @ngdoc directive
 * @name angularPortfolioApp.directive:miniimages
 * @description
 * # miniimages
 */
angular.module('angularPortfolioApp')
    .directive('miniimages', function() {
        return {
            templateUrl: '/views/miniimages.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                //element.text('this is the miniimages directive');
            }
        };
    });