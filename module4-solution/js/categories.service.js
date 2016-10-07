(function () {
'use strict';

angular.module('MenuApp')
  .service('CategoriesService', CategoriesService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


  CategoriesService.$inject = ['$http', 'ApiBasePath']
  function CategoriesService($http, ApiBasePath) {
    var service = this;

    service.getCategories = function () {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json"),
      })
      .then(function (response) {
        return response.data;
      });
    }
    
    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName),
      })
      .then(function (response) {
        return response.data;
      });
    }
    return service;
  }

})();
