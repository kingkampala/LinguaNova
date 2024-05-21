const OpenAI = require('openai');
const TransModel = require('../model/translate');
require('dotenv').config();

// initialize OpenAI
const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

const translateText = async (req, res) => {
  try {
    const { sourceLanguage, translateLanguage, sourceText } = req.body;

    // Use OpenAI to translate the text (replace with actual translation logic)
    const translatedText = await openai.translate(sourceText, {
      source_language: sourceLanguage,
      translate_language: translateLanguage,
    });

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
