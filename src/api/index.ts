import { Router } from "express";
import V1Router from "./V1/index";

const router = Router();

router.use("/v1", V1Router);

export default router;
