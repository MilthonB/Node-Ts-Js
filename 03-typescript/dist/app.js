"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const warrior_service_1 = require("./services/warrior.service");
const warrior = (0, warrior_service_1.findWarriorById)(1);
console.log((_a = warrior === null || warrior === void 0 ? void 0 : warrior.name) !== null && _a !== void 0 ? _a : 'Warrior Z not found');
