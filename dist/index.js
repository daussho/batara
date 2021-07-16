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
    };
    useStateX.prototype.domUpdater = function (newVal) {
        var el = document.querySelectorAll("[d-state=\"" + this.name + "\"]");
        el.forEach(function (e) {
            e.textContent = newVal;
        });
    };
    return useStateX;
}());
var Batara = /** @class */ (function () {
    function Batara(stateList) {
        this.stateList = stateList;
        this.createInputEvent();
    }
    Batara.prototype.createInputEvent = function () {
        var _this = this;
        var el = document.querySelectorAll("[d-input]");
        el.forEach(function (e) {
            var eventName = e.getAttribute("d-event") || "change";
            e.addEventListener(eventName, function () {
                var key = e.getAttribute("d-input") || "";
                var inputType = e.getAttribute("type") || "text";
                var inputValue = "";
                switch (inputType) {
                    case "checkbox":
                        inputValue = e.checked;
                        break;
                    default:
                        inputValue = e.value;
                        break;
                }
                _this.stateList[key] = inputValue;
                console.log(_this.stateList[key]);
                var textSubscriber = document.querySelectorAll("[d-text=" + key + "]");
                textSubscriber.forEach(function (text) {
                    text.textContent = _this.stateList[key];
                });
                var visibilitySubscriber = document.querySelectorAll("[d-show=" + key + "]");
                visibilitySubscriber.forEach(function (visibility) {
                    _this.showHideNode(visibility, inputValue);
                });
            });
        });
    };
    Batara.prototype.showHideNode = function (element, show) {
        if (show) {
            element.style.display = "";
        }
        else {
            element.style.display = "none";
        }
    };
    return Batara;
}());
