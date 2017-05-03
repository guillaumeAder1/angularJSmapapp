'use strict';

/**
 * @ngdoc directive
 * @name angularPortfolioApp.directive:loader
 * @description
 * # loader
 */
angular.module('angularPortfolioApp')
    .directive('loader', function() {
        return {
            //template: '<div></div>',
            replace: true,
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                //element.text('this is the loader directive');
            },
            templateUrl: "/views/loader.html"
        };
    });