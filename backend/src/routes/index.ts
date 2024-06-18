import { Router } from "express";
import { handleListUsers, handleUserPost } from "./handlers.js";

const router = Router();

router.post("/users", handleUserPost);
router.get("/users", handleListUsers);

export default router;
