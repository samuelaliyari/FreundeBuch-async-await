import { friendsDAO } from "../Data-Access/index.js";
import { services } from "../Services/index.js";


export const putSummaryCtrl = async (req, res) => {
    try {
        const updatedFriend = await services.editSummary(req.body)
        res.json({ success: true, result: updatedFriend })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}