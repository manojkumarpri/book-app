import { Router } from 'express';
import partnerexpectationController from '../controllers/partnerexpectationController';

const router = Router();

router.get('/', partnerexpectationController.getAllpartnerexpectations);
router.post('/', partnerexpectationController.addpartnerexpectation);
router.get('/:id', partnerexpectationController.getApartnerexpectation);
router.put('/:id', partnerexpectationController.updatedpartnerexpectation);
router.delete('/:id', partnerexpectationController.deletepartnerexpectation);

export default router;