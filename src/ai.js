import axios from "axios";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY; 
const BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const generateRephrasedText = async (text) => {
  if (!text.trim()) return ["Enter some text to rephrase."];

  try {
    const response = await axios.post(`${BASE_URL}?key=${API_KEY}`, {
      contents: [
        {
          parts: [
            {
              text: `Rephrase the following text in at least different ways:\n\n${text}`,
            },
          ],
        },
      ],
    });

   
    return response.data.candidates.map(
      (candidate) => candidate.content.parts[0].text
    );
  } catch (error) {
    console.error("Error fetching Gemini API response:", error);
    return ["Error generating response."];
  }
};
