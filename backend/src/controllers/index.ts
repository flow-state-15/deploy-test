import { prisma } from "../app.js";

export async function createUser(user: string) {
    return await prisma.user.create({ data: { name: user } })
};

export async function listUsers() {
    return await prisma.user.findMany();
}