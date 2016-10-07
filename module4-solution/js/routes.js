(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      list: ['CategoriesService', function (CategoriesService) {
        return CategoriesService.getCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'templates/items.template.html',
    controller: 'ItemsController as itemsList',
    resolve: {
      list: ['$stateParams', 'CategoriesService',
        function ($stateParams, CategoriesService) {
          return CategoriesService.getItemsForCategory($stateParams.itemId);
        }]
      }
  });
}

})();
