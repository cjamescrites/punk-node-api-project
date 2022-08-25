import Router from 'express';
import { getCustomBeer, getCustomBeerByID, addCustomBeer, deleteCustomBeer, updateCustomBeerByID } from '../controllers/customBeerController.js'

const router = Router();

router.get("/", getCustomBeer);

router.get("/:id", getCustomBeerByID);

router.post("/", addCustomBeer);

router.delete("/:id", deleteCustomBeer)

router.put("/:id", updateCustomBeerByID)

export default router;