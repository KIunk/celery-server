import { Router } from "express";
import miscRouter from "./miscellaneous.router";

const router = Router();

router.use("/misc", miscRouter);

export default router;
