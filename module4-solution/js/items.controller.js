(function () {
  'use strict';

  angular.module('MenuApp').
    controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$stateParams', 'list'];
  function ItemsController($stateParams, list) {
    var itemsList = this;
    itemsList.category = $stateParams.itemId;
    itemsList.list = list.menu_items;
  }

})();
