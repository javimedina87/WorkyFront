'use strict';

angular.module('workyFrontApp')
  .factory('ProductService', function ($http) {

    return {
      getAllUsers: getAllUsers
    };



    function getAllUsers () {
      return $http.get('http://localhost:3000/users')
        .then(getAllUsersComplete)
        .catch(getAllUsersFailed);

      function getAllUsersComplete(response) {
        console.log('getAllUsers retrieved successfully');
        return response.data;
      }

      function getAllUsersFailed(error) {
        console.log(error.data);
      }
    }


  });
