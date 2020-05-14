import { Router } from 'express';
import basicinfoController from '../controllers/basicinfoController';

const router = Router();

router.get('/', basicinfoController.getAllbasicinfos);
router.post('/', basicinfoController.addbasicinfo);
router.get('/:id', basicinfoController.getAbasicinfo);
router.put('/:id', basicinfoController.updatedbasicinfo);
router.delete('/:id', basicinfoController.deletebasicinfo);

export default router;