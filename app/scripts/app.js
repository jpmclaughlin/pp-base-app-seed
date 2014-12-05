'use strict';

/**
 * @ngdoc overview
 * @name ppBaseAppSeedApp
 * @description
 * # ppBaseAppSeedApp
 *
 * Main module of the application.
 */

var basesApp = angular.module('basesApp', ['ui.bootstrap']);

basesApp.controller('BaseListCtrl', ['$scope', '$http', 'filterFilter', function($scope, $http, filterFilter) {

  $http.get('data/mill3.json').success(function(data) {
      $scope.sizes = data;
  });

  // init values
  $scope.sizesModel = { };
  $scope.gaugesModel = { };
  $scope.selectedGauge = { };
  $scope.sbModel = { };
  $scope.rbModel = { };



  $scope.setSize = function(size) {

    // first, reset the selections
    $scope.gaugesModel = {};
    $scope.sbModel = {};
    $scope.rbModel = {};

    $scope.selectedSize = filterFilter($scope.sizes, size);

    for (var i = 0; i < $scope.selectedSize.length; i++) {
      if ($scope.selectedSize[i].size === size) {
        $scope.gauges = angular.copy($scope.selectedSize[i].gauges);
      }
    }
  };

  // $scope.setSize($scope.sizesModel.size);

  $scope.setGauge = function(gauge) {

    // first, reset the selections
    $scope.sbModel = {};
    $scope.rbModel = {};

    $scope.selectedGauge = filterFilter($scope.gauges, gauge);

    for (var i = 0; i < $scope.selectedGauge.length; i++) {
      if ($scope.selectedGauge[i].gauge === gauge) {
        $scope.sizingBases = angular.copy($scope.selectedGauge[i].sizingBases);
        $scope.reshapingBases = angular.copy($scope.selectedGauge[i].reshapingBases);
      }
    }
  };

}]);
