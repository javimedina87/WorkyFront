'use strict';

angular.module('workyFrontApp')
  .controller('HomeCtrl', function ($uibModal, $timeout) {
    var viewModel = this;

    function showLoginModal() {
      var modal = $uibModal.open({
        templateUrl: 'views/templates/login.html',


      })
    }

  });
