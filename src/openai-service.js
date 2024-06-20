import OpenAI from 'openai';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('No OPEN_API_KEY in .env file!');
}

const openai = new OpenAI({ key: apiKey });

export const getResponseMessageContent = async (messages) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 500,
        temperature: 0
    });

    return response.choices[0].message.content;
}

const checkApiUsage = async () => {
    try {
        const response = await axios.get('https://api.openai.com/v1/dashboard/billing/usage', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        console.log('API Usage:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching usage data:', error.message);
    }
};

checkApiUsage();