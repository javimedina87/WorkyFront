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
    viewModel.openLoginModal = function () {
      console.log("login enter");

      var loginModal = $uibModal.open({
        templateUrl: 'templates/loginModal.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl',
        resolve: {}
      });

      loginModal.result.then(function () {
        $log.info('Result del login modal');
      }, function () {
        $log.info('Dimissed login modal');
      });

      console.log("login out");
    }



  });
