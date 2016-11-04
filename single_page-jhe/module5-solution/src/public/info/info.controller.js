(function() {
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['ApiPath', 'SignService'];
function InfoController(ApiPath, SignService) {
  var ctrl = this;
  var service = SignService;

  var info = service.getDetails();


  if (service.isSignedUp()) {
    ctrl.firstName = info.firstName;
    ctrl.lastName = info.lastName;
    ctrl.email = info.email;
    ctrl.saved = true;

    if (!ctrl.phone) {
      ctrl.phone = "Phone number not supplied"
    } else {
      ctrl.phone = info.phone;
    }
    ctrl.menu_item = info.menu_item;
    ctrl.image = ApiPath + "/images/" + info.menu_item.short_name + ".jpg";
  }
}
})();
