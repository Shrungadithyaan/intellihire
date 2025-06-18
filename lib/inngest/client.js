import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "intellihire", // Unique app ID
  name: "intellihire",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
