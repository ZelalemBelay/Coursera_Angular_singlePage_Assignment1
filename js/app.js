(function(){
  angular.module('LunchCheck', [])

  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.inject = ['$scope', '$filter'];
  function LunchCheckController($scope)
  {
      $scope.data = "";
      $scope.message = "";

      $scope.checkTooMuch = function()
      {
        if($scope.data==""){
          $scope.message = "Please enter data first";
        }

        else
        {
        var m = $scope.data.split(",").length;
        if(m<=3)
           $scope.message="Enjoy!";
        else
          $scope.message="Too much!";
        }
      };
  };

})();
