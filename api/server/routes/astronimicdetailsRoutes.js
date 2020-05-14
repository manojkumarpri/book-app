import { Router } from 'express';
import astronimicdetailsController from '../controllers/astronimicdetailsController';

const router = Router();

router.get('/', astronimicdetailsController.getAllastronimicdetailss);
router.post('/', astronimicdetailsController.addastronimicdetails);
router.get('/:id', astronimicdetailsController.getAastronimicdetails);
router.put('/:id', astronimicdetailsController.updatedastronimicdetails);
router.delete('/:id', astronimicdetailsController.deleteastronimicdetails);

export default router;