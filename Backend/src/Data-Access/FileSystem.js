import fs from "fs";

export const readJsonFile = async (jsonFilePath) => {
    const jsonFileBuffer = await fs.promises.readFile(jsonFilePath);
    const jsonString = jsonFileBuffer.toString();
    const jsonFile = JSON.parse(jsonString);
    return jsonFile
}


export const writeJsonFile = async (jsonFilePath, jsonData) => {
    const jsonString = JSON.stringify(jsonData, null, 2)
    const writtenJsonFile = await fs.promises.writeFile(jsonFilePath, jsonString);
    return jsonData
}


