import { Router } from 'express';
import myinterestController from '../controllers/myinterestController';

const router = Router();

router.get('/', myinterestController.getAllmyinterests);
router.post('/', myinterestController.addmyinterest);
router.get('/:id', myinterestController.getAmyinterest);
router.put('/:id', myinterestController.updatedmyinterest);
router.delete('/:id', myinterestController.deletemyinterest);

export default router;