(function () {
  'use strict';

  angular.module('MenuApp').
    controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService', 'list'];
  function CategoriesController(MenuDataService, list){
    var categories = this;
    categories.list = list;
  }

})();
