import { friendsDAO } from "../Data-Access/index.js";




export const toggleFreelance = async (friendId) => {

    const allFriends = await friendsDAO.getAllFriends();
    const updatedFriends = allFriends.map(friend => {
        if (friend.id.toString() === friendId) {
            return { ...friend, freelancer: !friend.freelancer }
        } else {
            return friend
        }
    })
    const writtenUpdatedFriends = await friendsDAO.saveAllFriends(updatedFriends)
    return friendId
}