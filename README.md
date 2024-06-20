# OpenAI Chatbot

This is a simple chatbot application that uses the OpenAI GPT-3 model to generate responses.

## Project Structure

The project is organized into several JavaScript files:

- [`chatbot.js`](src/chatbot.js): Contains the main chatbot functionality, including sending requests to the OpenAI API and handling user input.
- [`openai-service.js`](src/openai-service.js): Handles communication with the OpenAI API.
- [`io-utils.js`](src/io-utils.js): Contains utility functions for saving the conversation to a file.
- [`main.js`](src/main.js): The entry point of the application.
- [`openai-config.js`](src/openai-config.js): Contains the OpenAI API key.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create `.env` file in project root directory and add `OPENAI_API_KEY=your_api_key`

## Usage

1. Run `node src/main.js` to start the chatbot.
2. Type your message and press enter to get a response.
3. Type 'exit' to end the conversation. The conversation will be saved to a file in the `conversations` directory.

## Dependencies

- [chalk](https://www.npmjs.com/package/chalk): Terminal string styling done right.
- [openai](https://www.npmjs.com/package/openai): Official OpenAI API client library for JavaScript.

## License

This project is licensed under the ISC license.