import { Configuration, OpenAIApi } from "openai";
import { openaiApiKey } from "./variables";

const config = new Configuration({ apiKey: openaiApiKey });
const openai = new OpenAIApi(config);

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

export const fixGrammar = async (input: string) => {
    const response = await openai.createEdit({
        model: "text-davinci-edit-001",
        input,
        instruction: "Fix the spelling and grammer mistakes.",
        temperature: 0,
    });

    return response.data;
};
