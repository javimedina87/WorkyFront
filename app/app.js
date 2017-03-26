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
    'ui.sortable'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

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
        controllerAs: 'aboutCtrl'
      })
      .state('pomodoro', {
        url: '/pomodoro',
        templateUrl: 'components/pomodoro/pomodoro.html',
        controller: 'PomodoroController',
        controllerAs: 'pomodoroCtrl'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'components/products/products.html',
        controller: 'ProductsController',
        controllerAs: 'productsCtrl'
      })
      .state('error', {
        url: '/error',
        templateUrl: 'components/error/error.html',
        controller: 'ErrorController',
        controllerAs: 'errorCtrl'
      });
  });
