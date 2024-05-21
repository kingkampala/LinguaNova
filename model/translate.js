const mongoose = require("mongoose");

const TransScheme = new mongoose.Schema({
  sourceLanguage: {
    type: String,
    required: true
},
  translateLanguage: {
    type: String,
    required: true
},
  sourceText: {
    type: String,
    required: true
},
  translatedText: {
    type: String
},
  timestamp: {
    type: Date,
    default: Date.now
},
});

const TransModel = mongoose.model("Translation", TransScheme);

module.exports = TransModel;