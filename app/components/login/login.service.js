'use strict';

angular.module('workyFrontApp')
  .factory('loginService', function ($http) {

    return {
      login: login,
      register: register
    };

    //Check user credentials from database
    function login(credentials) {
      return $http({method: 'POST', url: 'http://localhost:3000/users/login', data: credentials})
        .then(loginSuccessful)
        .catch(loginError);

      function loginSuccessful(response) {
        localStorage.setItem("worky_jwt", response.data.JWT);
        return response.data[0];
      }

      function loginError(response) {
        return response.data;
      }
    }

    //Register new user
    function register(credentials) {
      return $http({method: 'POST', url: 'http://localhost:3000/users/register', data: credentials})
        .then(registerSuccessful)
        .catch(registerError);

      function registerSuccessful(response) {
        return response.data;
      }

      function registerError(response) {
        return response.data;
      }
    }


  });

