import { addContractCtrl } from "./addContractCtrl.js";
import { deleteFriendCtrl } from "./deleteFriendCtrl.js";
import { getFriendsCtrl } from "./getFriendsCtrl.js";
import { postFriendsCtrl } from "./postFriendsCtrl.js";
import { putSummaryCtrl } from "./putSummaryCtrl.js";
import { toggleFreelanceCtrl } from "./toggleFreelancectrl.js";


const friendsController = {
    getFriendsCtrl,
    postFriendsCtrl,
    deleteFriendCtrl,
    addContractCtrl,
    toggleFreelanceCtrl,
    putSummaryCtrl,
}



export default friendsController