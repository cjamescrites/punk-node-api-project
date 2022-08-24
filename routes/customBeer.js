import Router from 'express';
import { getCustomBeer } from '../controllers/customBeerController.js'

const router = Router();

router.get("/", getCustomBeer);

export default router;