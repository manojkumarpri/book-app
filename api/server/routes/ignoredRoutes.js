import { Router } from 'express';
import ignoredController from '../controllers/ignoredController';

const router = Router();

router.get('/', ignoredController.getAllignoreds);
router.post('/', ignoredController.addignored);
router.get('/:id', ignoredController.getAignored);
router.put('/:id', ignoredController.updatedignored);
router.delete('/:id', ignoredController.deleteignored);

export default router;