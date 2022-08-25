import Router from 'express';
import { getCustomBeer, getCustomBeerByID } from '../controllers/customBeerController.js'

const router = Router();

router.get("/", getCustomBeer);

router.get("/:id", getCustomBeerByID);

// router.get("/:name", getCustomBeerByName)

// router.post("/", addCustomBeer);

export default router;