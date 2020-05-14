import { Router } from 'express';
import followedController from '../controllers/followedController';

const router = Router();

router.get('/', followedController.getAllfolloweds);
router.post('/', followedController.addfollowed);
router.get('/:id', followedController.getAfollowed);
router.put('/:id', followedController.updatedfollowed);
router.delete('/:id', followedController.deletefollowed);

export default router;