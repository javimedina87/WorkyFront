'use strict';

angular.module('workyFrontApp')
  .factory('ProductService', function ($http) {

    return {
      loadAllUsers: function () {
        $http({
          method: 'GET',
          url: 'http://localhost:3000/users'
        }).then(function successCallback(response) {
          console.log('List of users successfully retrieved');
          return response.data;
        }, function errorCallback(response) {
          console.log('Error retrieving list of users');
        });
      }
    }


  });
