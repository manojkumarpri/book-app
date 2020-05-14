import { Router } from 'express';
import shortlistedController from '../controllers/shortlistedController';

const router = Router();

router.get('/', shortlistedController.getAllshortlisteds);
router.post('/', shortlistedController.addshortlisted);
router.get('/:id', shortlistedController.getAshortlisted);
router.put('/:id', shortlistedController.updatedshortlisted);
router.delete('/:id', shortlistedController.deleteshortlisted);

export default router;