"use strict";
var useStateX = /** @class */ (function () {
    function useStateX(name, init) {
        this.name = name;
        this.value = init;
        this.history = [init];
        this.domUpdater(init);
    }
    useStateX.prototype.change = function (newState) {
        this.history.push(newState);
        this.value = newState;
        this.domUpdater(newState);
        console.log(newState);
    };
    useStateX.prototype.domUpdater = function (newVal) {
        var el = document.querySelectorAll("[d-state=\"" + this.name + "\"]");
        el.forEach(function (e) {
            e.textContent = newVal;
        });
    };
    return useStateX;
}());
