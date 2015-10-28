'use strict';
/**
 * @file app.js.js
 *
 * @author Vladimir_Levin
 * @date 28.10.2015
 */
(function () {
    angular.module('ui-router-extend', ['ui.router'])
        .config(function ($stateProvider, Routes, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/first');
            angular.forEach(Routes, function (value) {
                $stateProvider.state(value);
            })
        });
})();