﻿define(['directives/controls/pnControls'], function (control) {
    var controller = function ($scope, $element, $attrs, $transclude, $compile) {
        var vm = this;
        vm.display = "";
        vm.input = "";

        vm.action = function (event, action) {
            vm.display += " " + event.target.innerText + " ";
        }

        vm.number = function (number) {
            vm.display += number;
        }
    };

    control.directive('pnCalculator', function factory() {
        var directiveDefinitionObject = {
            templateUrl: "app/partials/directives/pn-calculator.html",
            restrict: 'E',
            scope: {
                options: '='
            },
            controller: controller,
            controllerAs: "vm",
            link: function (scope, elem, attr) {

            }
        };
        return directiveDefinitionObject;
    });

});