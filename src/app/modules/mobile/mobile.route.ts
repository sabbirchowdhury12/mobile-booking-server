import express from "express";
import { mobileController } from "./mobile.controller";

const router = express.Router();

router.get("/", mobileController.getAllData);

export const mobileRouter = router;
