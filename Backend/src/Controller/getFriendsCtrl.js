import { services } from "../Services/index.js";


const INTERNAL_SERVER_ERROR = 500;


export const getFriendsCtrl = async (_, res) => {
    try {
        const allfriends = await services.getFriends()
        res.json({ success: true, result: allfriends })
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ success: false, error: error })
    }
}