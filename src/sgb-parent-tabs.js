'use strict';

angular.module('sgb-parent-tabs', ['megazord'])

    .controller('sgb-parent-tabs-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams',
               function ($scope, _router, _screen, _screenParams, $stateParams) {
        _screen.initialize($scope, _screenParams);
        $scope.selected = 1; 

        $scope.swipeLeft = function() {
            if ($scope.selected == 0) return;
            $scope.selected--; 
            _router.goToState($scope._screenParams.menu[$scope.selected].screen);
        }

        $scope.swipeRight = function() {
            if ($scope.selected == $scope._screenParams.menu.length-1) return;
            $scope.selected++; 
            _router.goToState($scope._screenParams.menu[$scope.selected].screen);
        }
        
        $scope.changeSlide = function(index, screen) {
            $scope.selected = index; 
            _router.goToState(screen);
        }

    }]);