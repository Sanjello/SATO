import Router from 'express';
import PostController from "./PostController.js";

const router = new Router();

router.post('/courses', PostController.create);
router.get('/courses', PostController.getAll);
router.get('/courses/:id', PostController.getOne);
router.put('/courses/:id', PostController.update);
router.delete('/courses/:id', PostController.delete);

export default router;
