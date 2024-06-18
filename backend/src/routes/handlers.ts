import { Request, Response } from "express";
import { createUser, listUsers } from "../controllers/index.js";

export async function handleUserPost(req: Request, res: Response) {
	try {
		const { name } = req.query;
		if (!(typeof name === "string")) {
			res.status(400).json({
				error: "Invalid name parameter.",
			});
			return;
		}

		const newUser = await createUser(name);

        if (newUser) {
            res.status(200).json(newUser);
        } else {
            throw Error;
        }
	} catch (e) {
		res.status(500).json({
			error: "Something went wrong creating user.",
		});
	}
}

export async function handleListUsers(req: Request, res: Response) {
    try {
        const users = listUsers();
        
        if(!users) throw Error;

        res.json(users);
    } catch {
        res.status(500).json({
			error: "Something went wrong fetching users.",
		});
    }
}