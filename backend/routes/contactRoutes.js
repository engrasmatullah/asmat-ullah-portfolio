import express from "express";
import { createContactMessage } from "../controllers/contactController.js";

const router = express.Router();

// POST /api/contact -> saves a new contact message
router.post("/contact", createContactMessage);

export default router;
