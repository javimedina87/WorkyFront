'use strict';

angular.module('workyFrontApp')
  .factory('jwtHelperService', function ($http, jwtHelper, $rootScope) {

    return {
      decodingToken: decodingToken
    };

    //Check user credentials from database
/*    function checkJwtToken(token) {
      return $http({method: 'POST', url: 'http://localhost:3000/users/jwt', token: token})
        .then(jwtSuccessful)
        .catch(jwtError);

      function jwtSuccessful(response) {
        console.log('successful token de backend');
        return localStorage.getItem('JWT');
      }

      function jwtError(response) {
        console.log('error, se escribe un token nulo');
        localStorage.setItem("JWT", null);
        return localStorage.getItem('JWT');
      }
    }*/

    function decodingToken(token) {
      /*console.log('--> Start decodingToken: ' + token);*/

      var tokenPayload = jwtHelper.decodeToken(token);
      /*console.log('..decodeToken' + tokenPayload);*/

      var date = jwtHelper.getTokenExpirationDate(token);
      /*console.log('..date' + date);*/

      var tokenExpired = jwtHelper.isTokenExpired(token);
      /*console.log('..expirado???' + bool);*/

      $rootScope.isAuthenticated = !tokenExpired;
      console.log('Autenticado jwtHelper: ' + $rootScope.isAuthenticated);

      /*console.log('<-- Finish decodingToken: ' + token);*/

      return token;
    }


  });

