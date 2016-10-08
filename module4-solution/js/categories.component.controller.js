(function () {
  'use strict';

  angular.module('MenuApp').
    controller('CategoriesComponentController', CategoriesComponentController);

  function CategoriesComponentController(){
    var controller = this;

    controller.loadCategory = function (categoryCode) {
      controller.onLoad({ categoryCode: categoryCode });
    };
  }

})();
