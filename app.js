(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject =['$scope'];
function LunchCheckController  ($scope) {
  $scope.name = "";
  $scope.message = "";

  $scope.countItems = function () {
    var message = countItemsInBox($scope.name);
    $scope.message = message;
  };


  function countItemsInBox(string) {
    var numItems = 0;
    var list = string.split(',');
    list = list.filter(Boolean)
    numItems = list.length;
    var retStr = "";
    if(numItems > 3){
      retStr = "Too much!";
    }
    else if (numItems > 0){
      retStr = "Enjoy!";
    }

        return retStr;
  }

}

})();
