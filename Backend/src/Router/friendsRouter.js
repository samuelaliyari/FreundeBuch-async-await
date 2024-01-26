import express from "express";
import friendsController from "../Controller/index.js";




const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriendsCtrl);

friendsRouter.post("/", express.json(), friendsController.postFriendsCtrl);

friendsRouter.delete("/:friendId", friendsController.deleteFriendCtrl);

friendsRouter.patch("/:friendId/contract", friendsController.addContractCtrl);

friendsRouter.patch("/:friendId/freelance", friendsController.toggleFreelanceCtrl);

friendsRouter.put("/changeSummary", express.json(), friendsController.putSummaryCtrl)


export default friendsRouter