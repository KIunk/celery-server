import { Router } from "express";
import { MiscellaneousController } from "../../controllers/miscellaneous.controller";

const router = Router();
const miscController = new MiscellaneousController();

router.get("/health", miscController.health);

export default router;
