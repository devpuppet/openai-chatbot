import readline from 'readline';
import chalk from 'chalk';
import { saveConversationToFile } from './io-utils.js';
import { getResponseMessageContent } from './openai-service.js';

const messages = [{role: 'system', content: `Your name is Aiden, you are a manager in big IT company, experienced in interpersonal relationships.`}];

const chatbot = async (userInput) => {
    addUserInput(userInput);
    const reply = await getResponseMessageContent(messages);
    console.log(chalk.green(`Chatbot: ${reply}`));
    addReply(reply);
    return reply;
}

const addUserInput = async (userInput) => {
    messages.push({role: 'user', content: userInput});
}

const addReply = async (response) => {
    messages.push({role: 'assistant', content: response});
}

export const startChat = async () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    console.log(chalk.green("Chatbot: Hello! Type 'exit' to end the conversation."));
  
    while (true) {
      const userInput = await getUserInput(rl, chalk.blue("You: "));
      if (userInput.toLowerCase() === 'exit') {
        await saveConversationToFile(messages);
        console.log(chalk.green("Chatbot: Goodbye!"));
        rl.close();
        break;
      }
  
      await chatbot(userInput);
    }
  };
  
const getUserInput = (rl, prompt) => {
return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
    resolve(answer);
    });
});
};