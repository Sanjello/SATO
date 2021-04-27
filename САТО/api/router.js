import Router from 'express';
import Sys_analiz_controller from "./Sys_analiz_controller.js";

const router = new Router();

router.post('/sys_analiz', Sys_analiz_controller.create);
router.get('/sys_analiz', Sys_analiz_controller.getAll);
router.get('/sys_analiz/:id', Sys_analiz_controller.getOne);
router.put('/sys_analiz/:id', Sys_analiz_controller.update);
router.delete('/sys_analiz/:id', Sys_analiz_controller.delete);

export default router;
