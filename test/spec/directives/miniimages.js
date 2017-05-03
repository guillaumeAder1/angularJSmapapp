'use strict';

describe('Directive: miniimages', function () {

  // load the directive's module
  beforeEach(module('angularPortfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<miniimages></miniimages>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the miniimages directive');
  }));
});
