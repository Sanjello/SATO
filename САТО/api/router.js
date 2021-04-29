import Router from 'express';
import SystemAnalizController from "./SystemAnalizController.js";
import Analiz_danux_controller from "./Analiz_danux_controller.js";
import MagistrController from "./MagistrController.js";
const router = new Router();

router.post('/systemAnaliz', SystemAnalizController.create);
router.get('/systemAnaliz', SystemAnalizController.getAll);
router.get('/systemAnaliz/:id', SystemAnalizController.getOne);
router.put('/systemAnaliz/:id', SystemAnalizController.update);
router.delete('/systemAnaliz/:id', SystemAnalizController.delete);

router.post('/analizDanux', Analiz_danux_controller.create);
router.get('/analizDanux', Analiz_danux_controller.getAll);
router.get('/analizDanux/:id', Analiz_danux_controller.getOne);
router.put('/analizDanux/:id', Analiz_danux_controller.update);
router.delete('/analizDanux/:id', Analiz_danux_controller.delete);

router.post('/magistr', MagistrController.create);
router.get('/magistr', MagistrController.getAll);
router.get('/magistr/:id', MagistrController.getOne);
router.put('/magistr/:id', MagistrController.update);
router.delete('/magistr/:id', MagistrController.delete);
export default router;
