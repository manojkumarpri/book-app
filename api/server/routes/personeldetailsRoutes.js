import { Router } from 'express';
import personeldetailsController from '../controllers/personeldetailsController';

const router = Router();

router.get('/', personeldetailsController.getAllpersoneldetailss);
router.post('/', personeldetailsController.addpersoneldetails);
router.get('/:id', personeldetailsController.getApersoneldetails);
router.put('/:id', personeldetailsController.updatedpersoneldetails);
router.delete('/:id', personeldetailsController.deletepersoneldetails);

export default router;