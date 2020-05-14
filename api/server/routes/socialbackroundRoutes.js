import { Router } from 'express';
import socialbackroundController from '../controllers/socialbackroundController';

const router = Router();

router.get('/', socialbackroundController.getAllsocialbackrounds);
router.post('/', socialbackroundController.addsocialbackround);
router.get('/:id', socialbackroundController.getAsocialbackround);
router.put('/:id', socialbackroundController.updatedsocialbackround);
router.delete('/:id', socialbackroundController.deletesocialbackround);

export default router;