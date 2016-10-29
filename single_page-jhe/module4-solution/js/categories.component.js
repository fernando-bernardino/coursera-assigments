(function () {
  'use strict';

  angular.module('MenuApp').
    component('categoriesList', {
      templateUrl: 'templates/categories.list.template.html',
      bindings: {
        list: '<',
        onLoad: '&'
      },
      controller: 'CategoriesComponentController'
    });
})();
