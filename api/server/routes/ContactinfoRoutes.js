import { Router } from 'express';
import ContactinfoController from '../controllers/ContactinfoController';

const router = Router();

router.get('/', ContactinfoController.getAllContactinfos);
router.post('/', ContactinfoController.addContactinfo);
router.get('/:id', ContactinfoController.getAContactinfo);
router.put('/:id', ContactinfoController.updatedContactinfo);
router.delete('/:id', ContactinfoController.deleteContactinfo);

export default router;