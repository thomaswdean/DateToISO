(function () {

    function dateToIso() {
        var linkFunction = function (scope, element, attrs, ngModelCtrl) {

            ngModelCtrl.$parsers.push(function (datepickerValue) {
                return moment(datepickerValue).toISOString();
            });
        };

        return {
            restrict: "A",
            require: "ngModel",
            link: linkFunction
        };
    }

    angular.module("app")
        .directive('dateToIso', dateToIso);
})();
