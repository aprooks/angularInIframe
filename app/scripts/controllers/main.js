'use strict';

/**
 * @ngdoc function
 * @name iframeTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iframeTestApp
 */
angular.module('iframeTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
