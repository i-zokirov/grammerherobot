"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixGrammar = void 0;
const openai_1 = require("openai");
const variables_1 = require("./variables");
const config = new openai_1.Configuration({ apiKey: variables_1.openaiApiKey });
const openai = new openai_1.OpenAIApi(config);
// (async () => {
//     try {
//         const response = await openai.createEdit({
//             model: "text-davinci-edit-001",
//             input: "apoligize",
//             instruction: "Fix the spelling and grammer mistakes",
//             temperature: 0,
//         });
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// })();
const fixGrammar = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield openai.createEdit({
        model: "text-davinci-edit-001",
        input,
        instruction: "Fix the spelling and grammer mistakes.",
        temperature: 0,
    });
    return response.data;
});
exports.fixGrammar = fixGrammar;
//# sourceMappingURL=openai.js.map