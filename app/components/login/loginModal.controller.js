'use strict';

angular.module('workyFrontApp')
  .controller('LoginModalController', function (loginService, loginModalData, $uibModalInstance, $state) {
    var vm = this;
    vm.loginModalData = loginModalData;

    vm.login = function () {
      var credentials = {username: vm.username, password: vm.password};
      return loginService.login(credentials).then(function(data) {
          if(!data.error) {
            vm.loginModalData.username = data[1];
            vm.loginModalData.userIsLogged = true;
            vm.loginError = null;
            $uibModalInstance.close(vm.loginModalData);
            closeModal();
            /*$state.go('workys');*/
          } else {
            vm.loginError = data.error;
            vm.loginModalData.userIsLogged = false;
          }
        });
    }

    vm.register = function () {
      var credentials = {username: vm.usernameRegister, password: vm.passwordRegister, email: vm.emailRegister};
      return loginService.register(credentials).then(function(data) {
        if(!data.error) {
          vm.registerError = data;
          $uibModalInstance.close();
          $state.go('pomodoro');
        } else {
          vm.registerError = data.error;
        }
      });
    }

    function closeModal() {
      $uibModalInstance.close(vm.loginModalData);
    }


  });
