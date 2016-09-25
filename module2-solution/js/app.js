(function () {
  'use strict';

  angular.module('ShoppingCart', [])
    .controller('BuyController', BuyController)
    .controller('ToBuyController', ToBuyController);

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
    console.log(toBuy.basket);
  };
})();
