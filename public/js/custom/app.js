var app = angular.module('travelApp', [
    "ngSanitize"
]);

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        // cdnImageURL +'**'
    ]);

});

app.config(function ($httpProvider) {
    $httpProvider.useApplyAsync(true);
});

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);
//
///**
// * ************************************************************************
// * These Angular routes should be mapped with Laravel in order to send 404,
// * for invalid URLs for SEO purposes.
// * Routes should be mapped in app/Http/routes/angular-catch-all.php
// * ************************************************************************
// */
//
///**
// * Hide the spinning loader in angular loading progress bar
// */
//app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
//    cfpLoadingBarProvider.includeSpinner = false;
//}]);
//
//
///**
// * Create HTML templates relative path
// */
//function template(name) {
//    return 'app/templates/' + name;
//}
//
//app.config(function ($routeProvider, $locationProvider) {
//    "ngInject";
//    /**
//     * Define the route of the paths
//     * isAuth parameter defines the state of the route
//     * -1 == Should Not logged in
//     * 0 == Either login or logout
//     * 1 == Should login
//     */
//
//    /**
//     * =======================
//     * Temporary routes
//     * Login
//     */
//    $routeProvider
//        .when('/login-user', {
//            templateUrl: cdnURL + 'temp/login.html',
//            reloadOnSearch: true,
//            prParams: {
//                isAuth: -1
//            }
//        })
//        .when('/create-profile', {
//            templateUrl: cdnURL + 'temp/select-profile.html',
//            reloadOnSearch: true,
//            prParams: {
//                isAuth: 1
//            }
//        })
//        .otherwise({
//            //redirectTo: '/'
//            templateUrl: cdnURL + 'static/error.html',
//            reloadOnSearch: false,
//            prParams: {
//                isAuth: 0
//            }
//    });
//
//    /**
//     * This will remove hash bang from the routes
//     */
//    $locationProvider.html5Mode(true);
//});
//
//
//app.run(function run($rootScope, $location, $window, epUser, epShared, epEvents, epConstants, epValidations, epAccount, $translate, epDialog) {
//
//    "ngInject";
//    $rootScope.$on("$routeChangeStart", function (event, current, previous) {
//
//        var currentUrl = $location.url();
//
//
//        /**
//         * Check for temporary site configuration
//         */
//        if (!epConstants.IS_TEMP) {
//
//            var notAllowedTempRoutes = ['/login-user', '/create-profile'];
//
//            if (!epUser.isLogged() && current.prParams && current.prParams.isAuth == 1) {
//                $location.path('/login').search({redirect: currentUrl});
//            } else if (epUser.isLogged() && current.prParams && current.prParams.isAuth == -1) {
//                $location.path('/');
//            } else {
//                //Neutral path. Doesn't matter weather you login or logout
//                if (current.$$route && notAllowedTempRoutes.indexOf(current.$$route.originalPath) >= 0) {
//                    $location.path('/');
//                }
//            }
//        } else {
//
//            var allowedTempRoutes = ['/login-user', '/create-profile', '/stylist/create', '/business/create',
//                '/stylist/:locationSlug/:nameSlug', '/business/:locationSlug/:nameSlug'];
//
//            if (current.$$route && allowedTempRoutes.indexOf(current.$$route.originalPath) < 0) {
//                if (!epUser.isLogged() && current.prParams) {
//                    $location.path('/login-user');
//                } else if (epUser.isLogged() && current.prParams) {
//                    $location.path('/create-profile');
//                }
//            } else {
//                if (!epUser.isLogged() && current.prParams && current.prParams.isAuth == 1) {
//                    $location.path('/login-user');
//                } else if (epUser.isLogged() && current.prParams && current.prParams.isAuth == -1) {
//
//                    if (current.$$route.originalPath == '/login-user' && !epValidations.empty($location.search().uld)) {
//                        if($location.search().uld != epUser.getUserID()){
//                            epAccount.logout();
//                        } else{
//                            $location.path('/create-profile');
//                        }
//                    } else {
//                        $location.path('/create-profile');
//                    }
//
//                } else {
//                    //Neutral path. Doesn't matter weather you login or logout
//                    if (current.$$route && (current.$$route.originalPath == '/stylist/:locationSlug/:nameSlug' ||
//                        current.$$route.originalPath == '/business/:locationSlug/:nameSlug') && !epUser.isLogged()) {
//                        $location.path('/login-user');
//                    }
//                }
//            }
//
//        }
//
//
//        if(previous && previous.$$route && previous.originalPath == "/search"){
//            epShared.setBackPath({
//                path: '/search',
//                params: previous.params
//            });
//        } else{
//            epShared.setBackPath({
//                path: '',
//                params: {}
//            });
//        }
//
//
//
//        /**
//         * Handle cancel booking when redirecting form the bookings page to another
//         */
//        if (epUser.isLogged() && previous && previous.$$route && previous.$$route.originalPath && previous.$$route.originalPath == '/payment/:BookingID') {
//            epShared.setIsBooking(true);
//            epEvents.triggerSetBookingFormStatus();
//            var tempPath = '';
//            if (epShared.getIsBookingFormDirty()) {
//
//                if (!($location.path().indexOf('/payment/') > -1)) {
//                    tempPath = $location.path();
//                }
//
//                event.preventDefault();
//
//                epDialog.confirm($translate.instant('WARNING.DISCARD_CHANGES'), function () {
//                    epShared.setIsBookingFormDirty(false);
//                    epEvents.triggerCancelBooking(tempPath);
//                });
//
//            } else {
//                event.preventDefault();
//                epShared.setIsBookingFormDirty(false);
//                epEvents.triggerCancelBooking($location.path());
//            }
//        }
//
//    });
//
//    $rootScope.$on('$locationChangeStart', function (event, next, current) {
//        if (next != current) {
//            /**
//             * Trigger tag manager to be false
//             */
//            epEvents.triggerRouteChangeStart(false);
//
//            epEvents.triggerSeoUpdate(epConstants.META.TITLE,
//                epConstants.META.DESCRIPTION,
//                epConstants.META.KEYWORDS);
//            epShared.setBookingDataForSignup({
//                status: false,
//                data: {}
//            });
//            epEvents.triggerClearResponse();
//        }
//    });
//
//});
//


app.controller('HomeController', function ($scope) {
    "ngInject";


    $scope.openCalendar = function () {
        $scope.popup.opened = !$scope.popup.opened;
    };

    $scope.format = 'dd-MMM-yyyy';

    $scope.popup = {
        opened: false
    };

    console.log('this is an test');

    $scope.dismissCalendar = function () {
        $scope.popup.opened = false;
    };

    $scope.callAlter = function () {
        alert('alert called');
    };

});
/**
 * This directive is made to avoid the headache of handling
 * routing in the angular application. Because normally we can
 * set the routing in an Angular application with relative path
 * where the html5 mode is on via href. But this will create problems if
 * the browser is not supporting the html5 routing method. On those
 * moments, Angular again fallback for the hash bang routing mechanism and
 * the defined routes may break. So the best way is to change the routing
 * of the application through $location service. This directive ep-href
 * is a simple directive which retrieve the route location from the
 * element it self and change the route accordingly through inbuilt
 * Angular $location provider which is safe...
 */
app.directive('epHref', function (epUtil) {
    'ngInject';

    return {
        restrict: 'A',
        link: function (scope, $element, $attrs) {
            $element.bind('click', function () {
                /**
                 * Close the popup if id given as attribute.
                 * closeModal="#selectProfileModal"
                 **/
                if ($attrs && $attrs.closemodal) {
                    epUtil.hideModal($attrs.closemodal);
                }

                epUtil.route($attrs.epHref);
            });
        }
    };
});

app.directive('toggle', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            if (attrs.toggle=="tooltip"){
                $(element).tooltip();
            }
            if (attrs.toggle=="popover"){
                $(element).popover();
            }
        }
    };
});

app.directive('epServerResponse', function () {
    'ngInject';

    return {
        restrict: 'E',
        templateUrl: cdnURL + "static/response.html",
        link: function (scope, $element, $attrs) {
            scope.formType = $attrs.form;
            scope.errorsOnly = $attrs.errorsonly;
        }
    };

});


app.directive("compareTo", function () {
    "ngInject";
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function (modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function () {
                ngModel.$validate();
            });
        }
    };
});

/**
 * This directive will check if the input number is a valid decimal number
 */
app.directive('validNumber', function () {
    "ngInject";
    return function (scope, element, attrs) {

        var keyCode = [8, 9, 37, 39, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110];
        element.bind("keydown", function (event) {
            if ($.inArray(event.which, keyCode) == -1) {
                scope.$apply(function () {
                    scope.$eval(attrs.onlyNum);
                    event.preventDefault();
                });
                event.preventDefault();
            }

        });
    };
});


app.directive('btnAutoCollapse', function () {
    "ngInject";
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, element, attrs) {
            element.on('click', function (event) {
                $(".navbar-collapse.in").collapse('hide');
            });
        }
    }
});

app.directive('ngEnter', function () {
    "ngInject";
    return function (scope, elements, attrs) {
        elements.bind('keydown keypress', function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});

app.directive('autoFocus', function ($timeout) {
    return {
        restrict: 'AC',
        link: function (_scope, _element) {
            $timeout(function () {
                _element[0].focus();
            }, 500);
        }
    };
});
//# sourceMappingURL=app.js.map
