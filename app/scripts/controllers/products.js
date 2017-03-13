'use strict';

angular.module('workyFrontApp')
  .controller('ProductsCtrl', function ($http, ProductService) {
    var vm = this;

    activateUsers();

    function activateUsers() {
      console.log('1');
      return getUsers().then(function () {
        console.log('4');
        console.log('Users activated');
      });
    }

    function getUsers() {
      console.log('2');
      return ProductService.getAllUsers()
        .then(function(data) {
          console.log('3');
          vm.users = data;
          return vm.users;
      });
    }

/*    vm.users = ProductService.loadAllUsers();
    console.log(vm.users);*/

    /*function getAllUsers() {
      ProductService.loadAllUsers().then(function (data) {
        vm.users = data;
      }, function (error) {
        console.log('error load users controller');
      });
    }
    getAllUsers();*/


/*    function loadBooks() {
      $http({
        method: 'GET',
        url: 'http://localhost:3000/books'
      }).then(function successCallback(response) {
        vm.books = response.data;
        console.log('libros recuperados');
      }, function errorCallback(response) {
        console.log('error');
      });
    }
    loadBooks();*/



  });
