'use strict';

angular
  .module('workyFrontApp')
  .component('login', {
    templateUrl: 'components/login/login.html',
    controller: 'LoginController',
    controllerAs: 'loginCtrl'
  })
  .controller('LoginController', function($uibModal, $log) {
    var viewModel = this;

    //Login modal
    viewModel.openUserModal = function (loginFlag) {

      var loginModal = $uibModal.open({
        templateUrl: 'components/login/loginModal.html',
        controller: 'LoginModalController',
        controllerAs: 'loginModalCtrl',
        resolve: {
          loginFlag: loginFlag
        }
      });

      loginModal.result.then(function () {
        $log.info('Result del login modal');
      }, function () {
        $log.info('Dimissed login modal');
      });
    }

  });
