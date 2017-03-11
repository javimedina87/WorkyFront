'use strict';

angular.module('workyFrontApp')
  .controller('ProductsCtrl', function ($http, ProductService) {
    var vm = this;


    vm.users = ProductService.loadAllUsers();
    console.log(vm.users);


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
