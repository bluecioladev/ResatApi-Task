import { Router } from 'express';
//import { get } from 'mongoose';

import * as taskController from "../controllers/taskController";

const router = Router();

router.get('/', taskController.findAllTasks);

//ruta del modelo
router.post('/', taskController.createTask);

router.get('/done', taskController.findAllDOneTask);

//api/tasks/100
router.get('/:id', taskController.findOnetask);

router.delete('/:id', taskController.deleteTask);

router.put('/:id', taskController.updateTask);





export default router;