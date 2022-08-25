import Router from 'express';
import { getCustomBeer, getCustomBeerByName, addCustomBeer } from '../controllers/customBeerController.js'

const router = Router();

router.get("/", getCustomBeer);

// router.get("/:name", getCustomBeerByName)

router.post("/", addCustomBeer);

export default router;