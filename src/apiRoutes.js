import { Router } from 'express';
import * as PollController from './controllers/poll.controller';
import * as UserController from './controllers/user.controller';

const router = new Router();

router.get("/polls", PollController.getPolls);
router.post("/polls", PollController.createNewPoll);
router.put("/poll/:id", PollController.computeNewVote);

router.post("/users", UserController.saveNewUser);

export default router;