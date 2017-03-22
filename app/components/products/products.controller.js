'use strict';

angular.module('workyFrontApp')
  .controller('ProductsController', function ($http, productService) {
    var vm = this;

    function getUsers() {
      return productService.getAllUsers()
        .then(function(data) {
          vm.users = data;
      });
    }
    getUsers();


  });
