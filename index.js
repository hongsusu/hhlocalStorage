var localStorages = {
    get: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    set: function (key, val) {
        return localStorage.setItem(key, JSON.stringify(val));
    },
    clear: function () {
        return localStorage.clear()
    }
};

export default localStorages;

if (typeof window !== 'undefined' && !window.$localStorage) {
    window.$localStorage = localStorages;
}