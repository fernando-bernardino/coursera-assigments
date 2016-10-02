(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .filter('name', NameFilter)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
  function NarrowItDownController($scope, MenuSearchService){
    var controller = this;

    controller.listFilteredItems = function() {
      MenuSearchService.getMatchedMenuItems($scope.searchTerm)
      .then(function(response) {
        controller.found = response;
        controller.notFound = response.length === 0;
        controller.hasItems = !controller.notFound;
      })
      .catch(function (error) {
        controller.error = error;
      });
    }
    controller.removeItem = function(index){
      controller.found.splice(index, 1);
    }
  }

  function NameFilter() {
    return function (menuEntries, searchTerm) {
      var matches = [];
      var lowerCaseSearchTerm = searchTerm.toLowerCase();

      for(var i = 0; i < menuEntries.length; i ++) {

        if(menuEntries[i].name
            .toLowerCase()
            .indexOf(searchTerm) >= 0) {

          matches.push(menuEntries[i]);
        }
      }
      return matches;
    };
  }

  MenuSearchService.$inject = ['$http', '$q', 'ApiBasePath', 'nameFilter']
  function MenuSearchService($http, $q, ApiBasePath, nameFilter){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      var deferred = $q.defer();

      if(searchTerm) {
        getFilteredItems(deferred, searchTerm);
      } else {
        deferred.resolve([]);
      }
      return deferred.promise;
    }

    function getFilteredItems(deferred, searchTerm){
      $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
      })
      .then(function (response) {
        var foundItems = nameFilter(response.data.menu_items, searchTerm);
        deferred.resolve(foundItems);
      })
      .catch(function (response) {
        deferred.reject(response.status + " - " + response.statusText);
      });
    }

    return service;
  }

  function FoundItemsDirective(){
    var ddo = {
      templateUrl: 'items.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController($scope){
    var controller = this;
  }
})();
