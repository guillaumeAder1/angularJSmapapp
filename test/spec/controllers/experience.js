'use strict';

describe('Controller: ExperienceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPortfolioApp'));

  var ExperienceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperienceCtrl = $controller('ExperienceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExperienceCtrl.awesomeThings.length).toBe(3);
  });
});
