export interface IUrlService<T> {
  create: (data: T) => Promise<T>;
  get: (id: number) => Promise<T | null>;
  getAll: () => Promise<T[]>;
  delete: (id: number) => Promise<T>;
  findByUrl: (newUrl: string) => Promise<T | null>;
  findByShortUrl: (shortUrl: string) => Promise<T | null>;
  findByUrlId: (urlId: string) => Promise<T | null>;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
