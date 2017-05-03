'use strict';

describe('Controller: MapappCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPortfolioApp'));

  var MapappCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapappCtrl = $controller('MapappCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MapappCtrl.awesomeThings.length).toBe(3);
  });
});
