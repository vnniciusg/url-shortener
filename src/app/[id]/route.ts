import { shortLinkService } from "@/shared/services/shortLink";
import { NextResponse } from "next/server";
import { HttpMethod } from "@/shared/types/urlService";

export interface IParams {
  id?: string;
}

export const GET = async (
  request: Request,
  { params }: { params: IParams }
) => {
  if ((request.method as HttpMethod) === "GET") {
    try {
      const { id } = params;

      if (!id) {
        return NextResponse.json(
          { message: "URL não encontrada" },
          { status: 400 }
        );
      }

      const link = await shortLinkService.findByUrlId(id);

      return NextResponse.redirect(link?.url as string);
    } catch (err: any) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  }
};
