function getPosition(options) {
    if (!options) {
        return Promise.reject(new Error('Options Needed'));
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}
let value = 100;
let promise = Promise.resolve(value);

promise.then((returnValue) => {

}).catch((err) => {
    

});
