require('jspm_packages/github/Foxandxss/angular-toastr@1.5.0/angular-toastr.tpls.js');
require('jspm_packages/github/Foxandxss/angular-toastr@1.5.0/angular-toastr.min.css!css');
var CoNotificationService = (function () {
    function CoNotificationService(toastr) {
        this.toastr = toastr;
        this.defaultOptions = {
            timeOut: 5000,
            extendedTimeOut: 5000
        };
    }
    CoNotificationService.prototype.success = function (message, options) {
        this.toastr.success(message.body, message.header, angular.extend({}, this.defaultOptions, options));
    };
    CoNotificationService.prototype.info = function (message, options) {
        this.toastr.info(message.body, message.header, options);
    };
    CoNotificationService.prototype.error = function (message, options) {
        if (options === void 0) { options = {}; }
        var mergedOptions = angular.extend({
            closeButton: true,
            autoDismiss: false,
            timeOut: 15000,
            tapToDismiss: false
        }, options);
        return this.toastr.error(message.body, message.header, mergedOptions);
    };
    CoNotificationService.prototype.warning = function (message, options) {
        this.toastr.warning(message.body, message.header, options);
    };
    CoNotificationService.$inject = [
        'toastr'
    ];
    return CoNotificationService;
})();
exports["default"] = angular.module('coNotification', ['toastr'])
    .config(['toastrConfig', function (toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-right',
            maxOpened: 2,
            preventOpenDuplicates: true
        });
    }])
    .service('coNotificationService', CoNotificationService);
