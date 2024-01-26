import { friendsDAO } from "../Data-Access/index.js";




export const addContract = async (friendId) => {

    const allFriends = await friendsDAO.getAllFriends();
    const updatedFriends = allFriends.map(friend => {
        if (friend.id.toString() === friendId) {
            return { ...friend, contracts: friend.contracts + 1 }
        } else {
            return friend
        }
    })
    const writtenUpdatedFriends = await friendsDAO.saveAllFriends(updatedFriends)
    return friendId
}