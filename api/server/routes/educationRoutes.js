import { Router } from 'express';
import educationController from '../controllers/educationController';

const router = Router();

router.get('/', educationController.getAlleducations);
router.post('/', educationController.addeducation);
router.get('/:id', educationController.getAeducation);
router.put('/:id', educationController.updatededucation);
router.delete('/:id', educationController.deleteeducation);

export default router;