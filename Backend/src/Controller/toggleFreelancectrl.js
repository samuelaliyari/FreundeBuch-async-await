import { services } from "../Services/index.js"


export const toggleFreelanceCtrl = async (req, res) => {
    try {
        const friendId = await services.toggleFreelance(req.params.friendId)
        res.status(202).json({ success: true, result: "Friends Freelance status chenged for, friend ID: " + friendId })
    } catch (error) {
        res.status(500).json({ success: false, result: error })
    }
}