import { Router } from 'express';
import introductionController from '../controllers/introductionController';

const router = Router();

router.get('/', introductionController.getAllintroductions);
router.post('/', introductionController.addintroduction);
router.get('/:id', introductionController.getAintroduction);
router.put('/:id', introductionController.updatedintroduction);
router.delete('/:id', introductionController.deleteintroduction);

export default router;