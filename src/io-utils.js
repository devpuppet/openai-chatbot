import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';

const CONVERSATION_DIR = 'conversations';

export const saveConversationToFile = async (messages) => {
    try {
      await ensureDirectoryExists(CONVERSATION_DIR);
  
      const timestamp = new Date().toISOString().replace(/:/g, '');
      const fileName = `conversation_${timestamp}.txt`;
      const filePath = path.join(CONVERSATION_DIR, fileName);
  
      const content = messages.map(message => `${message.role}: ${message.content}`).join('\n');
  
      await fs.writeFile(filePath, content, 'utf-8');
      console.log(chalk.green(`Chatbot: Conversation saved to ${filePath}`));
    } catch (error) {
      console.error(chalk.red('Error saving conversation to file:', error.message));
    }
};

const ensureDirectoryExists = async (directory) => {
  try {
    await fs.access(directory);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(directory);
    } else {
      throw error;
    }
  }
};