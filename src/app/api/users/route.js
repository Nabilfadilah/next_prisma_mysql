import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST() {
    let name = "sugeng rahayu";
    let email = "sugeng@gmail.com";
    const newUser = await prisma.user.create({
        data: {
            name,
            email
        }
    });
    return NextResponse.json(newUser);
}