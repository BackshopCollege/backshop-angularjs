;(function(angular) {

  var module = angular.module('college', [])
  module.controller('LessonsController', LessonsController);

  function LessonsController($scope) {
    var lessons = angular.element('section[name="lesson"]');
    var numberOfLessons = lessons.length;
    var currentIndex = 0;

    $scope.nextLesson = function() {
      if((currentIndex++) >= numberOfLessons ) currentIndex = (numberOfLessons - 1);
      
    }

    $scope.previousLesson = function() {

    }

    $scope.currentLesson = function() {
      return { name: lessons.eq(currentIndex).data('lesson-name') }
    }

  }
})(angular);