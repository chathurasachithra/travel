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