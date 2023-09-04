import openai from './config/openai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

const userName = readlineSync.question('May I have your name? ');
console.log('Hi' + userName + '!');

async function main( ) {

    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.green('You can start chatting with the bot.'));

    while (true) {
        // Get input from the user
        const userInput = readlineSync.question(colors.yellow('You: '));

        try {
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
              });

              const completionText = completion.data.choices[0].message.content;

            if (userInput.toLocaleLowerCase() === 'exit') {
                console.log(colors.green('Bot: ') + completionText);
                return;
            }
            console.log(colors.green('Bot: ') + completionText);
        } catch (error) {
            console.log(colors.red('Error: ') + error);
        }
      }
  }
  
main();