"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    trin: true
  },
  description: {
    type: String,
    trin: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true
});
taskSchema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)('Task', taskSchema);

exports["default"] = _default;