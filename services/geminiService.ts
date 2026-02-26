import { GoogleGenAI } from "@google/genai";
import { MenuItem, CartItem } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getChefRecommendation = async (
  query: string, 
  currentCart: CartItem[], 
  menuContext: MenuItem[]
): Promise<string> => {
  if (!ai) {
    return "Lo siento, el Chef Virtual no está disponible en este momento (Falta API Key).";
  }

  try {
    const menuDescription = menuContext.map(i => `${i.name} (${i.category}): ${i.description}`).join('\n');
    const cartDescription = currentCart.length > 0 
      ? "El cliente tiene esto en su carrito: " + currentCart.map(i => i.name).join(', ') 
      : "El carrito está vacío.";

    const prompt = `
      Contexto del Menú:
      ${menuDescription}

      Contexto del Cliente:
      ${cartDescription}

      Pregunta del Cliente:
      "${query}"

      Responde como el Chef Virtual recomendando algo específico del menú.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Lo siento, estoy teniendo problemas para pensar en una recomendación.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Hubo un error al consultar al Chef. Por favor intenta de nuevo.";
  }
};
