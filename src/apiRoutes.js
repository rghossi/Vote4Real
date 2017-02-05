import { Router } from 'express';
import Passport from 'passport';
import * as PollController from './controllers/poll.controller';
import * as UserController from './controllers/user.controller';

const router = new Router();

router.get("/polls", PollController.getPolls);
router.post("/polls", PollController.createNewPoll);
router.put("/poll/:id", PollController.computeNewVote);
router.get("/user/polls", UserController.getUserPolls);

router.post("/login", Passport.authenticate('facebook', { scope : 'email' }));
router.post("/logout", UserController.logout);
router.get("/isLoggedIn", UserController.isLoggedIn);
router.get("/login/facebook/return", Passport.authenticate('facebook', {
        successRedirect : '/user/polls',
        failureRedirect : '/'
    })
);

export default router;