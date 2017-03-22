'use strict';

angular.module('workyFrontApp')
  .factory('productService', function ($http) {

    return {
      getAllUsers: getAllUsers
    };

    //Get all users from database
    function getAllUsers () {
      return $http.get('http://localhost:3000/users')
        .then(getAllUsersComplete)
        .catch(getAllUsersFailed);

      function getAllUsersComplete(response) {
        return response.data;
      }

      function getAllUsersFailed(error) {
        console.log('getAllUsersFailed: ' + error.data);
      }
    }


  });
