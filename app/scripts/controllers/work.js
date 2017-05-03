'use strict';

/**
 * @ngdoc function
 * @name angularPortfolioApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the angularPortfolioApp
 */
angular.module('angularPortfolioApp')
    .controller('WorkCtrl', function($scope) {
        $scope.list = [
            { name: "john" },
            { name: "patrick" },
            { name: "peter" },
            { name: "josh" },
            { name: "guill" },

        ];
    });