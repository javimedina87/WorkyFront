'use strict';

angular.module('workyFrontApp')
  .factory('jwtHelperService', function ($http, jwtHelper, $rootScope) {

    return {
      decodeToken: decodeToken
    };

    //Check if token has expired
    function decodeToken(token) {
      var tokenExpired = jwtHelper.isTokenExpired(token);

      $rootScope.isAuthenticated = !tokenExpired;
      console.log('Autenticado jwtHelper: ' + $rootScope.isAuthenticated);

      return token;
    }

});

