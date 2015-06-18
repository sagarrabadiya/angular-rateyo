angular.module('rateYo', [])
    .directive('rateYo', function() {
        'use strict';
        return {
            require: 'ngModel',
            scope: {
                rating: '=ngModel',
                options: '=options',
                readOnly: '@readOnly'
            },
            link: function(scope, element, attrs) {
                var options = {
                    rating: scope.rating,
                    readOnly: scope.readOnly
                };
                if (scope.options) {
                    if (typeof scope.options == 'string')
                        scope.options = scope.$eval(scope.options);
                    options = angular.extend(options, scope.options);
                }
                $(element).rateYo(options);
                $(element).rateYo().on('rateyo.set', function(e, data) {
                    if (attrs.onSet) {
                        element.scope()[attrs.onSet](e, data);
                    }
                }).on('rateyo.change', function(e, data) {
                    if (attrs.onChange) {
                        element.scope()[attrs.onChange](e, data);
                    }
                });
                scope.$watch('rating', function(newRating) {
                    $(element).rateYo('rating', newRating);
                });
                scope.$watch('options', function(newOptions) {
                    angular.forEach(newOptions, function(value, key) {
                        $(element).rateYo('option', key, value);
                    });
                }, true);
            }
        };
    });
