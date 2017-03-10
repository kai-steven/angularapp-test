(function () {
'use strict';


  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      console.log($scope);
      console.log($scope.lunchtext);
      $scope.lunchtext = '';

      $scope.lunchmessage = function() {
        if ( !$scope.lunchtext) {
          $scope.message = 'Please enter data first.';
          return;
        }
        var itemArr = $scope.lunchtext.split(',');

        itemArr = itemArr.filter(function(item) {
          return Boolean(item.trim());
        });
        console.log(itemArr);

        var numitems = itemArr.length;

        if(numitems <= 3) {
          $scope.message = 'Enjoy! ';
        } else {
          $scope.message = 'Too much!';
        }
        return;
      };
  }


})();
