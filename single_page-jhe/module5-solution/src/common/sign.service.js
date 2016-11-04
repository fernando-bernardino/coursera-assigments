(function(){

angular.module('common')
.service('SignService', SignService);

function SignService() {
  var service = this;

  service.signup = function (details) {
    service.details = details;
  }

  service.isSignedUp = function () {
    if(service.details) {
      return true;
    } else {
      return false;
    }
  }

  service.getDetails = function() {
    return service.details;
  }
}
})();
