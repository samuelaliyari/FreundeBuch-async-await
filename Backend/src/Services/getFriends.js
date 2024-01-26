import { friendsDAO } from "../Data-Access/index.js";



export const getFriends = async () => {
    const allfriends = await friendsDAO.getAllFriends();
    return allfriends
}