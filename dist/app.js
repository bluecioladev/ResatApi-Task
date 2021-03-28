"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _taskRoutes = _interopRequireDefault(require("./routes/task-routes"));

var app = (0, _express["default"])(); //settings

app.set('port', process.env.PORT || 3000); //middlewares

var corsoptions = {};
app.use((0, _cors["default"])({
  corsoptions: corsoptions
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json()); //para que entienda tmbien las peticiones de formularios html usamos

app.use(_express["default"].urlencoded({
  extended: false
})); //routes

app.get('/', function (req, res) {
  res.json({
    message: 'wellcome to my aplication'
  });
});
app.use('/api/tasks', _taskRoutes["default"]);
var _default = app;
exports["default"] = _default;