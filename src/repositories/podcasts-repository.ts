import fs from "fs"; //pacote FILE SYSTEM do próprio NODE JS
import path from "path"; // pacote PATH
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (
    podcastName?: string
): Promise<PodcastModel[]> => {
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
        jsonFile = jsonFile.filter(
            (podcast:PodcastModel) => podcast.podcastName === podcastName
        );
    }

    return jsonFile;
}