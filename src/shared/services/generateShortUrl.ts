import { customAlphabet } from "nanoid";

const generateShortId = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  6
);

let BASE_URL: string;

if (process.env.NODE_ENV !== "production") {
  BASE_URL = process.env.BASE_URL_DEVELEPOMENT as string;
}

BASE_URL = process.env.BASE_URL_PRODUCTION as string;
export interface ShortLinkData {
  newShortUrl: string;
  shortId?: string;
}

export const generateShortLink = async (): Promise<ShortLinkData> => {
  try {
    const urlId = generateShortId();
    const newShortUrl = `${BASE_URL}/${urlId}`;
    return {
      newShortUrl: newShortUrl,
      shortId: urlId,
    };
  } catch (err) {
    throw new Error("Não foi possível encurtar a URL");
  }
};
