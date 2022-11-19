import { Router } from "express";
import main from '../controllers/main';
const router = Router();

router.get('/', main.index);

export default router;