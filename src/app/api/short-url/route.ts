import { shortLinkService } from "@/shared/services/shortLink";
import { NextRequest, NextResponse } from "next/server";
import { HttpMethod } from "@/shared/types/urlService";
import { validateUrl } from "@/shared/utils/validateUrl";
import { generateShortLink } from "@/shared/services/generateShortUrl";

export const POST = async (request: NextRequest) => {
  if ((request.method as HttpMethod) === "POST") {
    try {
      const { url } = await request.json();
      if (!url) {
        return NextResponse.json(
          { message: "Insira uma URL para continuar" },
          { status: 404 }
        );
      }

      const validUrl = validateUrl(url);

      if (!validUrl) {
        return NextResponse.json({ message: "URL Invalida" }, { status: 400 });
      }

      const { newShortUrl, shortId } = await generateShortLink();

      const createUrl = await shortLinkService.create({
        urlId: shortId as string,
        urlShorter: newShortUrl as string,
        url: url,
      });
      return NextResponse.json({ message: createUrl }, { status: 201 });
    } catch (err: any) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  }
};

export const GET = async (request: NextRequest) => {
  if ((request.method as HttpMethod) === "GET") {
    try {
      const urls = await shortLinkService.getAll();
      return NextResponse.json({ data: urls }, { status: 200 });
    } catch (err: any) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  }
};
