var sizeToBytes = (function () {

    'use strict';

    var base  = 1024,
        sizes = {
            'KB': Math.pow(base, 1),
            'MB': Math.pow(base, 2),
            'GB': Math.pow(base, 3),
            'TB': Math.pow(base, 4),
            'PB': Math.pow(base, 5),
            'EB': Math.pow(base, 6),
            'ZB': Math.pow(base, 7),
            'YB': Math.pow(base, 8)
        };

    return function (amount, format) {
        return amount * sizes[format];
    };

}());