
import { services } from "../Services/index.js";



export const deleteFriendCtrl = async (req, res) => {
    try {
        const friendId = await services.removeFriend(req.params.friendId)
        res.status(201).json({ success: true, result: "the Friend with id: " + friendId + " has been removed" });
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}