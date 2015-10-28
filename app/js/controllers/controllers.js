'use strict';
/**
 * @file controllers.js
 *
 * @author Vladimir_Levin
 * @date 28.10.2015
 */
(function () {
    angular.module('ui-router-extend')
        .controller('FirstController', function () {
            console.log('I\'m the first, mtf');
        })
        .controller('SecondController', function () {
            console.log('I\'m the second, duuude');
        })
        .controller('ThirdController', function () {
            console.log('The shird tucks');
        })
        .controller('FourController', function () {
            console.log('Fantastic FOUR');
        })
        .controller('FifthController', function () {
            console.log('Just the fifth');
        }).
        controller('OtherCtrl', function () {
            console.log('Other');
        });
})();