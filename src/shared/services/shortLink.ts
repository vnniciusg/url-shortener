import client from "@/lib/prisma";
import { IUrlService } from "../types/urlService";

interface UrlShorter {
  id?: number;
  url: string;
  urlShorter?: string | null;
  urlId?: string | null;
}

export const shortLinkService: IUrlService<UrlShorter> = {
  getAll: () => client.urlShorter.findMany(),
  create: (data) => client.urlShorter.create({ data }),
  delete: (id: number) => client.urlShorter.delete({ where: { id } }),
  get: (id: number) => client.urlShorter.findUnique({ where: { id } }),
  findByUrl: (newUrl: string) =>
    client.urlShorter.findFirst({ where: { url: newUrl } }),
  findByShortUrl: (shortUrl: string) =>
    client.urlShorter.findFirst({ where: { urlShorter: shortUrl } }),
  findByUrlId: (id: string) =>
    client.urlShorter.findFirst({ where: { urlId: id } }),
};
