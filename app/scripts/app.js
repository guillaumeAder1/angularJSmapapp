'use strict';

/**
 * @ngdoc overview
 * @name angularPortfolioApp
 * @description
 * # angularPortfolioApp
 *
 * Main module of the application.
 */
angular
    .module('angularPortfolioApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'	
    ])
    .config(function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/work', {
                templateUrl: 'views/work.html',
                controller: 'WorkCtrl',
                controllerAs: 'work'
            })
            .when('/experience', {
                templateUrl: 'views/experience.html',
                controller: 'ExperienceCtrl',
                controllerAs: 'experience'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .when('/slideshow', {
                templateUrl: 'views/slideshowContainer.html',
                controller: 'SlideshowCtrl',
                //controllerAs: 'slideshow'
            })
            .when('/mapapp', {
              templateUrl: 'views/mapapp.html',
              controller: 'MapappCtrl',
              controllerAs: 'mapapp'
            })
            .otherwise({
                redirectTo: '/'
            });
    });