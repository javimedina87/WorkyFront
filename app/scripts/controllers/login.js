'use strict';

angular.module('workyFrontApp')
  .controller('LoginController', function () {
    var viewModel = this;

    viewModel.doLogin = function () {
      console.log("do Login");
    }

  });
