'use strict';

angular
  .module('workyFrontApp')
  .component('login', {
    templateUrl: 'components/login/login.html',
    controller: 'LoginController',
    controllerAs: 'loginCtrl'
  })
  .controller('LoginController', function($uibModal) {
    var vm = this;
    vm.loginModalData = {
      loginFlag : false,
      username: null,
      userIsLogged: false
    };

    //Login modal
    vm.openUserModal = function (loginFlag) {

      //Set flag received for login or register modal
      vm.loginModalData.loginFlag = loginFlag;

      $uibModal.open({
        templateUrl: 'components/login/loginModal.html',
        controller: 'LoginModalController',
        controllerAs: 'loginModalCtrl',
        resolve: {
          loginModalData : function () {
            return vm.loginModalData;
          }
        }
      }).result.then(function (result) {
        console.log('Result del login modal');
        vm.loginModalData = result;

      }, function () {
        console.log('Dimissed login modal');
      });
    }

    vm.logOut = function () {
      vm.loginModalData.username = null;
      vm.loginModalData.userIsLogged = false;
    }

  });
