(function() {
'use strict';

angular.module('public')
.controller('SignController', SignController)
;

SignController.$inject = ['$http', 'ApiPath', 'SignService'];

function SignController($http, ApiPath, SignService) {
  var ctrl = this;
  var service = SignService;

  ctrl.message = "";
  ctrl.dishExists = true;

  ctrl.signup = function () {
    ctrl.dishExists = true;
    var menuItem = ctrl.favourite.toUpperCase();

    ctrl.message = "Your information has been saved.";

    var promise = $http({
      method: "GET",
      url: (ApiPath + "/menu_items/" + menuItem + ".json")
    }).then(function(result) {
        service.signup({
          firstName: ctrl.firstName,
          lastName: ctrl.lastName,
          email: ctrl.email,
          phone: ctrl.phone,
          menu_item: result.data
        });

        ctrl.message = "Your information has been saved.";

      }, function(error) {
        ctrl.dishExists = false;
        ctrl.message = "No such menu number exists.";
      }
    )
  }
}
})();
