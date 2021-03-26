import { Router } from 'express';

import * as taskController from "../controllers/taskController";

const router = Router();

router.get('/', taskController.findAllTasks);

//ruta del modelo
router.post('/', taskController.createTask);


export default router;