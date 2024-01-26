
import { services } from "../Services/index.js";


export const postFriendsCtrl = async (req, res) => {
    try {
        const newFriend = await services.addFriend(req.body)
        res.json({ success: true, result: newFriend })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}