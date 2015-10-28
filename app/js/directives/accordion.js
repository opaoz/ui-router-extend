'use strict';
/**
 * @file accordion.js
 *
 * @author Vladimir_Levin
 * @date 28.10.2015
 */
(function () {
    angular.module('ui-router-extend').directive('accordion', function ($state, $compile) {
        var directive = {
            restrict: 'A',
            replace: true,
            link: function (scope, element, attr) {
                function change(value) {
                    var child = angular.element('<div></div>');
                    if (element.hasClass('open')) {
                        return;
                    }

                    element.empty();
                    child.append(value.template);
                    child.attr('ng-controller', value.controller);
                    $compile(child)(scope);
                    element.append(child);
                    element.addClass('open');
                }

                scope.$on('$destroy', scope.$on('$stateChangeStart', function (event, toState) {
                    var opened = false;

                    angular.forEach(toState.views, function (value, key) {
                        if (key === attr.accordion) {
                            change(value);
                            opened = true;
                        }
                    });

                    if (!opened) {
                        element.removeClass('open');
                    }
                }));
            }
        };

        return directive;
    })
    ;
})
();