'use strict';

/**
 * @ngdoc function
 * @name fsProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fsProjectApp
 */
var TeamControllers = angular.module('TeamControllers', []);

  TeamControllers.controller('MainCtrl', ['$scope', 'Teams', function ($scope, Teams) {
  		$scope.teams = Teams.query();
  }]);
