(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
