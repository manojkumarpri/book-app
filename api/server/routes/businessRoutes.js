import { Router } from 'express';
import businessController from '../controllers/businessController';

const router = Router();

router.get('/', businessController.getAllbusinesss);
router.post('/', businessController.addbusiness);
router.get('/:id', businessController.getAbusiness);
router.put('/:id', businessController.updatedbusiness);
router.delete('/:id', businessController.deletebusiness);

export default router;