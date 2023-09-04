import OpenAIClient from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new OpenAIClient({
    organization: 'org-WVgMywZvA4KllDSakEAkhUNt',
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIClient(configuration);

export default openai;