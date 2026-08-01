import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const createAccountSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).optional(),
  IBAN: z.string().max(34).optional(),
})

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
