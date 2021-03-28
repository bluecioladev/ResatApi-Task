"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var taskController = _interopRequireWildcard(require("../controllers/taskController"));

var router = (0, _express.Router)();
router.get('/', taskController.findAllTasks); //ruta del modelo

router.post('/', taskController.createTask);
router.get('/done', taskController.findAllDOneTask); //api/tasks/100

router.get('/:id', taskController.findOnetask);
router["delete"]('/:id', taskController.deleteTask);
router.put('/:id', taskController.updateTask);
var _default = router;
exports["default"] = _default;