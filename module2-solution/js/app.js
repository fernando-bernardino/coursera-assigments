(function () {
  'use strict';

  angular.module('ShoppingCart', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope'];
  function BuyController($scope){
    $scope.boughtBasket = [];
  }

  ToBuyController.$inject = ['$scope'];
  function ToBuyController($scope) {
    var toBuy = this;

    toBuy.basket = [
      { name: "cookies1", quantity: 1 },
      { name: "cookies2", quantity: 2 },
      { name: "cookies3", quantity: 3 },
      { name: "cookies4", quantity: 4 },
      { name: "cookies5", quantity: 5 }];

    toBuy.buy = function(index){
      $scope.boughtBasket.push(toBuy.basket[index]);
      toBuy.basket.splice(index, 1);
    }
  };

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService){
    var controller = this;

    controller.basket = ShoppingListCheckOffService.toBuy;
    controller.buy = ShoppingListCheckOffService.buy;
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var controller = this;

    controller.basket = ShoppingListCheckOffService.bought;
  }

  function ShoppingListCheckOffService(){
    var service = this;

    service.toBuy = [
      { name: "cookies1", quantity: 1 },
      { name: "cookies2", quantity: 2 },
      { name: "cookies3", quantity: 3 },
      { name: "cookies4", quantity: 4 },
      { name: "cookies5", quantity: 5 }];

    service.bought = [];

    service.buy = function(index){
      service.bought.push(service.toBuy[index]);
      service.toBuy.splice(index, 1);
    }

    return service;
  }
})();
