'use strict';
/**
 * @file routes.js
 *
 * @author Vladimir_Levin
 * @date 28.10.2015
 */
(function () {
    angular.module('ui-router-extend').constant('Routes', {
        'f-t-fi': {
            name: 'First-Third-Fifth',
            url: '/f-t-fi',
            views: {
                first: {
                    template: 'I\'m the first',
                    controller: 'FirstController'
                },
                third: {
                    template: 'The third :(',
                    controller: 'ThirdController'
                },
                fifth: {
                    template: 'Just the fifth',
                    controller: 'FifthController'
                }
            }
        },
        's-fo': {
            name: 'Second-Four',
            url: '/s-fo',
            views: {
                second: {
                    template: 'I\'m the second',
                    controller: 'SecondController'
                },
                four: {
                    template: 'Fantastic FOUR',
                    controller: 'FourController'
                }
            }
        },
        'first': {
            name: 'First',
            url: '/first',
            views: {
                first: {
                    template: 'I\'m the first',
                    controller: 'FirstController'
                }
            }
        },
        'second': {
            name: 'Second',
            url: '/second',
            views: {
                second: {
                    template: 'I\'m the second',
                    controller: 'SecondController'
                }
            }
        },
        'Third': {
            name: 'Third',
            url: '/third',
            views: {
                third: {
                    template: 'The third :(',
                    controller: 'ThirdController'
                }
            }
        },
        'Four': {
            name: 'Four',
            url: '/four',
            views: {
                four: {
                    template: 'Fantastic FOUR',
                    controller: 'FourController'
                }
            }
        },
        'Fifth': {
            name: 'Fifth',
            url: '/fifth',
            views: {
                fifth: {
                    template: 'Just the fifth',
                    controller: 'FifthController'
                }
            }
        }
    })
})();