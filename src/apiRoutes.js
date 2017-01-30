import { Router } from 'express';
import * as PollController from './controllers/poll.controller';

const router = new Router();

router.get("/polls", PollController.getPolls);

export default router;