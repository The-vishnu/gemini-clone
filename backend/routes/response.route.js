import express from 'express';
import { Router } from 'express';
import { getResponseFromGemini } from '../controllers/response.controller.js';

const router = Router();

router.post("/gemini", getResponseFromGemini);

export default router;
