'use strict';

/**
 * @ngdoc function
 * @name fsProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fsProjectApp
 */
var mainService = angular.module('mainService', ['ngResource']);

mainService.factory('Teams', ['$resource',
  function($resource){
    return $resource('https://api.thescore.com/nhl/teams', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

