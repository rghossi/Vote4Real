import { Router } from 'express';
import Passport from 'passport';
import * as PollController from './controllers/poll.controller';
import * as UserController from './controllers/user.controller';

const router = new Router();

router.get("/polls", PollController.getPolls);
router.post("/polls", UserController.isLoggedInMid, PollController.createNewPoll);
router.put("/poll/:id", PollController.computeNewVote);
router.post("/poll/:id", PollController.addNewOption);
router.delete("/poll/:id/:author", UserController.isLoggedInMid, PollController.removePoll);

router.get("/login", Passport.authenticate('facebook', { scope : 'email' }));
router.get("/logout", UserController.logout);
router.get("/isLoggedIn", UserController.isLoggedIn);
router.get("/login/facebook/return*", Passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/'
    })
);

export default router;