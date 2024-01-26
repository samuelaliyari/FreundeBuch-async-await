import { friendsDAO } from "../Data-Access/index.js";
import Friend from "../Domain/index.js";


export const addFriend = async (friendInfo) => {
    const allFriends = await friendsDAO.getAllFriends();
    const newFriend = Friend(friendInfo);
    const newFriendsArray = [...allFriends, newFriend];
    const WrittenNewFriendsArray = friendsDAO.saveAllFriends(newFriendsArray)
    return newFriend
}
