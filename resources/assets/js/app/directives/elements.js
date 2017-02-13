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