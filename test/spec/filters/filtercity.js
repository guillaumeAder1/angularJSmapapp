'use strict';

describe('Filter: filterCity', function () {

  // load the filter's module
  beforeEach(module('angularPortfolioApp'));

  // initialize a new instance of the filter before each test
  var filterCity;
  beforeEach(inject(function ($filter) {
    filterCity = $filter('filterCity');
  }));

  it('should return the input prefixed with "filterCity filter:"', function () {
    var text = 'angularjs';
    expect(filterCity(text)).toBe('filterCity filter: ' + text);
  });

});
