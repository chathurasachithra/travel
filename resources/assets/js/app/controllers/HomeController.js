
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