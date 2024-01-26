import { readJsonFile, writeJsonFile } from "./FileSystem.js"

const friendsFilePath = new URL("../../data/friends.json", import.meta.url).pathname

export const getAllFriends = async () => {
    const allFriends = await readJsonFile(friendsFilePath);
    return allFriends
}


export const saveAllFriends = async (jsonData) => {
    const allFriends = await writeJsonFile(friendsFilePath, jsonData);
    return allFriends
}

