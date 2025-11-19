import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateStrategy = async (userIdea: string): Promise<string> => {
  try {
    const ai = getClient();
    
    const prompt = `
      Sen Videm Dijital Ajans'ın kıdemli strateji uzmanısın.
      Potansiyel bir müşteri sana şu iş fikriyle geldi: "${userIdea}".
      
      Lütfen bu müşteri için ajansımızın hizmetlerini (SEO, Web Tasarım, Reklam, Markalaşma, İçerik Üretimi) nasıl kullanabileceğine dair 
      kısa, etkileyici, maddeler halinde ve profesyonel bir strateji taslağı oluştur. 
      Tone-of-voice: Profesyonel, yenilikçi, güven verici ve motive edici.
      Cevabı HTML formatında değil, temiz bir markdown veya düz metin formatında ver.
      Maksimum 150 kelime olsun.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Şu anda strateji oluşturulamadı. Lütfen daha sonra tekrar deneyiniz.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Üzgünüz, yapay zeka asistanımız şu anda yoğun. Lütfen doğrudan bizimle iletişime geçin.";
  }
};