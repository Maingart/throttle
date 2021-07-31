function throttle(func, ms) {
    let isThrottle = false;
    let args;
    let self;

    function wrapper() {
        if (isThrottle) {
            args = arguments;
            self = this;
            return;
        }

        func.apply(this, arguments);

        isThrottle = true;

        setTimeout(function() {
            isThrottle = false;
            if (args) {
                wrapper.apply(self, args);
                args = self = null;
            }
        }, ms)
    }
    
    return wrapper;
}