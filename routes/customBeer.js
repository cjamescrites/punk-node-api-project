import Router from 'express';
import { getCustomBeer, getCustomBeerByID, addCustomBeer } from '../controllers/customBeerController.js'

const router = Router();

router.get("/", getCustomBeer);

router.get("/:id", getCustomBeerByID);

router.post("/", addCustomBeer)

// router.post("/", addCustomBeer);

export default router;