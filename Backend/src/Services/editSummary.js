import { friendsDAO } from "../Data-Access/index.js";



export const editSummary = async (updatedFriend) => {
    const allFriends = await friendsDAO.getAllFriends();
    const updatedFriendsArray = allFriends.map(friend => {
        if (friend.id === updatedFriend.id) {
            return updatedFriend
        } else {
            return friend
        }
    })
    const writtenUpdatedFriends = await friendsDAO.saveAllFriends(updatedFriendsArray);
    return updatedFriend
}