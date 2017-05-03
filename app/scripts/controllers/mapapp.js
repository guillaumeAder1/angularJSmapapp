'use strict';

/**
 * @ngdoc function
 * @name angularPortfolioApp.controller:MapappCtrl
 * @description
 * # MapappCtrl
 * Controller of the angularPortfolioApp
 */

var cities = [{
        city: 'Toronto',
        desc: 'This is the best city in the world!',
        lat: 43.7000,
        long: -79.4000
    },
    {
        city: 'New York',
        desc: 'This city is aiiiiite!',
        lat: 40.6700,
        long: -73.9400
    },
    {
        city: 'Chicago',
        desc: 'This is the second best city in the world!',
        lat: 41.8819,
        long: -87.6278
    },
    {
        city: 'Los Angeles',
        desc: 'This city is live!',
        lat: 34.0500,
        long: -118.2500
    },
    {
        city: 'Las Vegas',
        desc: 'Sin City...\'nuff said!',
        lat: 36.0800,
        long: -115.1522
    }
];
angular.module('angularPortfolioApp')
    .controller('MapappCtrl', function($scope, getBikesData) {

        $scope.bounds = new google.maps.LatLngBounds();

        getBikesData.getCityList().then(function(res) {
            console.log(res)
            $scope.cities = res.data;
        }, function(err) {
            console.log(err)
        });

        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(53.3498, -6.2603),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var getBikesList = function() {
            getBikesData.getListBike().then(function(data) {
                for (var i in data.data) {
                    createMarker(returnData(data.data[i]));
                }
            });
        };

        getBikesList();

        var returnData = function(data) {
            return {
                lng: data.position.lng,
                lat: data.position.lat,
                name: data.name,
                status: data.status,
                address: data.address
            };
        };

        $scope.detail = function(item) {
            console.log(item.city);
            getBikesData.getCityBike(item.city.name).then(function(res) {
                $scope.clearMarker();
                if (res.data.length > 0) {
                    $scope.bounds = new google.maps.LatLngBounds();
                    for (var i in res.data) {
                        createMarker(returnData(res.data[i]));
                    }
                    $scope.map.fitBounds($scope.bounds);
                    // $scope.map.panToBounds($scope.bounds);
                    //$scope.map.setZoom(12);
                }
                console.log(res);
            }, function(err) {
                console.log(err);
            });
        };

        $scope.clearMarker = function(val) {
            for (var i in $scope.markers) {
                $scope.markers[i].setMap(null);
            }
            $scope.markers = [];
        };

        var initEvent = function() {
            var initialBounds;
            google.maps.event.addListener($scope.map, 'bounds_changed', function() {
                console.log($scope.map.getBounds());
            });
        }
        initEvent();

        var createMarker = function(info) {

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.name
            });
            marker.content = '<div class="infoWindowContent">' + info.address + '</div>';
            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent('<h4>' + marker.title + '</h4>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
            $scope.bounds.extend(marker.getPosition());
        };

        // for (var i = 0; i < cities.length; i++) {
        //     createMarker(cities[i]);
        // }

        $scope.openInfoWindow = function(e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
    });