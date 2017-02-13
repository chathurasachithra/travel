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
