"use strict";

var _script = _interopRequireDefault(require("./script"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const slider = new _script.default(600, 400, 5),
      someSlider = new _script.default(300, 450, 10);
slider.whoAmI();