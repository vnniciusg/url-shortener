import { shortLinkService } from "@/shared/services/shortLink";
import { NextResponse } from "next/server";
import { HttpMethod } from "@/shared/types/urlService";

export interface IParams {
  id?: string;
}

export const DELETE = async (
  request: Request,
  { params }: { params: IParams }
) => {
  if ((request.method as HttpMethod) === "DELETE") {
    try {
      const { id } = params;

      if (!id || isNaN(Number(id))) {
        return NextResponse.json(
          { message: "URL não encontrada" },
          { status: 400 }
        );
      }
      const parseId = parseInt(id);

      const link = await shortLinkService.get(parseId);

      if (!link) {
        return NextResponse.json(
          { message: "URL não encontrada" },
          { status: 400 }
        );
      }

      await shortLinkService.delete(parseId);

      return NextResponse.json(
        { message: "URL deletada com sucesso" },
        { status: 200 }
      );
    } catch (err: any) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  }
};

export const GET = async (
  request: Request,
  { params }: { params: IParams }
) => {
  if ((request.method as HttpMethod) === "GET") {
    try {
      const { id } = params;

      if (!id || isNaN(Number(id))) {
        return NextResponse.json(
          { message: "Url nao encontrada" },
          { status: 400 }
        );
      }
      const parseId = parseInt(id);
      const link = await shortLinkService.get(parseId);

      if (!link) {
        return NextResponse.json(
          { message: "Url nao encontrada" },
          { status: 400 }
        );
      }

      return NextResponse.json({ data: link }, { status: 200 });
    } catch (err: any) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
  }
};
