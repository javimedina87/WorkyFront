'use strict';

angular.module('workyFrontApp')
  .controller('LoginModalController', function (loginService, loginFlag, $uibModalInstance, $state) {
    var vm = this;
    vm.loginFlag = loginFlag;

    vm.login = function () {
      var credentials = {username: vm.username, password: vm.password};

      return loginService.login(credentials).then(function(data) {
          if(!data.error) {
            vm.loginError = null;
            vm.userLoggedId = data;
            $uibModalInstance.close();
            $state.go('pomodoro');
          } else {
            vm.loginError = data.error;
          }
        });
    }

    vm.register = function () {
      var credentials = {username: vm.usernameRegister, password: vm.passwordRegister};

      return loginService.register(credentials).then(function(data) {
        if(!data.error) {
          vm.registerError = data;
          $uibModalInstance.close();
          $state.go('products');
        } else {
          vm.registerError = data.error;
        }
      });
    }


  });
