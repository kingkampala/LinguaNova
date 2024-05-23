const { OpenAI } = require('openai');
const TransModel = require('../model/translate');
require('dotenv').config();

// initialize OpenAI
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const translateText = async (req, res) => {
  try {
    const { sourceLanguage, translateLanguage, sourceText } = req.body;

    // Construct the prompt for translation
    const prompt = `Translate this text from ${sourceLanguage} to ${translateLanguage}: "${sourceText}"`;

    // Use OpenAI to translate the text
    const response = await openai.createCompletion({
        engine: "davinci", // or any other appropriate model
        prompt: prompt,
        max_tokens: 100, // adjust based on expected length of the translated text
    });

    // Use OpenAI to translate the text (replace with actual translation logic)
    const translatedText = response.data.choices[0].text.trim();

    // Save the translation to the database
    const translation = new TransModel({
      sourceLanguage,
      translateLanguage,
      sourceText,
      translatedText,
    });
    await translation.save();

    res.status(201).json({ message: 'translation successful!', translatedText });
  } catch (error) {
    console.error('error translating text:', error);
    res.status(500).json({ error: 'something went wrong' });
  }
}

module.exports = {
  translateText,
};
