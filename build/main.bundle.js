"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main(name) {
        _classCallCheck(this, Main);

        this.name = name;
        this.run();
    }

    _createClass(Main, [{
        key: "run",
        value: function run() {
            var div = document.createElement("div");
            var content = document.createTextNode("Running " + this.name + "...");
            div.appendChild(content);
            document.body.appendChild(div);
        }
    }]);

    return Main;
}();

var app = new Main("God");
