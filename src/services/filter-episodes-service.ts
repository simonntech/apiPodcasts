import { repoPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {

    //interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    responseFormat = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;
}