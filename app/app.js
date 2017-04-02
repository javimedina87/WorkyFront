'use strict';

angular
  .module('workyFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'angular-jwt'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, jwtOptionsProvider) {

/*    jwtOptionsProvider.config({
      whiteListedDomains: ['localhost'],
      unauthenticatedRedirectPath: '/#!/about'
    });*/

    jwtOptionsProvider.config({
      whiteListedDomains: ['localhost'],
      unauthenticatedRedirector: ['$state', function($state) {
        $state.go('home');
      }],
      tokenGetter: ['jwtHelperService', function(jwtHelperService) {
        var token = localStorage.getItem('worky_jwt');
        if (token != null){
          return jwtHelperService.decodingToken(token);
        }else {
          return token;
        }
      }]
    });

/*    jwtInterceptorProvider.tokenGetter = function () {
      return localStorage.getItem('JWT');
    }*/

    $httpProvider.interceptors.push('jwtInterceptor');



    $urlRouterProvider.otherwise('/error');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'components/about/about.html',
        controller: 'AboutController',
        controllerAs: 'aboutCtrl',
        data: {
          requiresLogin: true
        }
      })
      .state('pomodoro', {
        url: '/pomodoro',
        templateUrl: 'components/pomodoro/pomodoro.html',
        controller: 'PomodoroController',
        controllerAs: 'pomodoroCtrl'
      })
      .state('users', {
        url: '/users',
        templateUrl: 'components/users/users.html',
        controller: 'UserController',
        controllerAs: 'userCtrl'
      })
      .state('workys', {
        url: '/workys',
        templateUrl: 'components/workys/workys.html',
        controller: 'WorkysController',
        controllerAs: 'workysCtrl'
      })
      .state('error', {
        url: '/error',
        templateUrl: 'components/error/error.html',
        controller: 'ErrorController',
        controllerAs: 'errorCtrl'
      });
  })
  .run(function(authManager, $rootScope) {

    $rootScope.isAuthenticated = authManager.isAuthenticated();
    console.log('Autenticado app: ' + authManager.isAuthenticated());

    authManager.redirectWhenUnauthenticated();

  });

