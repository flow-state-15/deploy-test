import express from "express";
import { PrismaClient } from "@prisma/client";
import router from "./routes/index.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
	res.json({ message: "welcome home" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

export { app, prisma };
