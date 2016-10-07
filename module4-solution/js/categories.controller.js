(function () {
  'use strict';

  angular.module('MenuApp').
    controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['CategoriesService', 'list'];
  function CategoriesController(CategoriesService, list){
    var categories = this;
    categories.list = list;
  }

})();
