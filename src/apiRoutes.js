import { Router } from 'express';
import * as PollController from './controllers/poll.controller';

const router = new Router();

router.get("/polls", PollController.getPolls);
router.post("/polls", PollController.createNewPoll);
router.put("/poll/:id", PollController.computeNewVote);

export default router;