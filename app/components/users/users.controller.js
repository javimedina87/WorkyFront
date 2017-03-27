'use strict';

angular.module('workyFrontApp')
  .controller('UserController', function ($http, usersService) {
    var vm = this;

    function getUsers() {
      return usersService.getAllUsers()
        .then(function(data) {
          vm.users = data;
      });
    }
    getUsers();


  });
