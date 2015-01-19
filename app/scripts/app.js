'use strict';

/**
 * @ngdoc overview
 * @name iframeTestApp
 * @description
 * # iframeTestApp
 *
 * Main module of the application.
 */
angular
  .module('iframeTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function(){
    console.log('hello from main ', window.test);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


