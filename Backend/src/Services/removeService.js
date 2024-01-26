import { friendsDAO } from "../Data-Access/index.js";


export const removeFriend = async (friendId) => {

    const allFriends = await friendsDAO.getAllFriends();
    const newFriendsArray = allFriends.filter(friend => friend.id.toString() !== friendId);
    const writtenNewFriendsArray = await friendsDAO.saveAllFriends(newFriendsArray)
    return friendId
} 