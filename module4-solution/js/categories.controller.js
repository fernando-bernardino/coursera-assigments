(function () {
  'use strict';

  angular.module('MenuApp').
    controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService', 'list', '$state'];
  function CategoriesController(MenuDataService, list, $state){
    var categories = this;
    categories.list = list;

    categories.loadCategory = function (categoryCode) {
      $state.go('items', {itemId : categoryCode});
    }
  }


})();
