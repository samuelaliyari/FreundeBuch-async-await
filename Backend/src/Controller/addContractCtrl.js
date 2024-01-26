import { services } from "../Services/index.js"


export const addContractCtrl = async (req, res) => {
    try {
        const friendId = await services.addContract(req.params.friendId)
        res.status(202).json({ success: true, result: "Contract added to Firends contacts, friend ID: " + friendId })
    } catch (error) {
        res.status(500).json({ success: false, result: error })
    }
}