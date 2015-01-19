'use strict';

/**
 * @ngdoc function
 * @name iframeTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iframeTestApp
 */
angular.module('iframeTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var canvas = angular
      .element('#canvas');
    canvas[0].contentWindow
      .test = 'message from main';
  });
