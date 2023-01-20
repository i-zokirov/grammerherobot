"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openaiApiKey = exports.botToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== "production")
    dotenv_1.default.config();
exports.botToken = process.env.BOT_TOKEN;
exports.openaiApiKey = process.env.OPENAI_KEY;
//# sourceMappingURL=variables.js.map