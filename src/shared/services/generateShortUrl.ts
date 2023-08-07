import { customAlphabet } from "nanoid";

const generateShortId = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  6
);

const base = "http://localhost:3000";

export interface ShortLinkData {
  newShortUrl: string;
  shortId?: string;
}

export const generateShortLink = async (): Promise<ShortLinkData> => {
  try {
    const urlId = generateShortId();
    const newShortUrl = `${base}/${urlId}`;
    return {
      newShortUrl: newShortUrl,
      shortId: urlId,
    };
  } catch (err) {
    throw new Error("Não foi possível encurtar a URL");
  }
};
