import fs from "fs"; //pacote FILE SYSTEM do próprio NODE JS
import path from "path"; // pacote PATH
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async () : Promise <Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    const jsonFile = JSON.parse(rawData);

    return jsonFile;
}