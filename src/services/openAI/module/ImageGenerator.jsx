import { openai } from "../config/OpenAI";

const PROMPT = "";
const N = 1;
const SIZE = "512x512";

export async function createImage(prompt = PROMPT) {
  const response = await openai.createImage({
    prompt,
    n: N,
    size: SIZE,
  });
  return response;
}
