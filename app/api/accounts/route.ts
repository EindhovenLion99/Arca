import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createAccountSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createAccountSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.issues, { status: 400 });
  }

  const newAccount = await prisma.account.create({
    data: {
      title: validation.data.title,
      description: validation.data.description || '',
      IBAN: validation.data.IBAN || '',
    },
  });

  return NextResponse.json(newAccount, { status: 201 });
}
