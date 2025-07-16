import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    //define contrato interface
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //busca os dados
    const data = await repoPodcast();

    // verifica a resposta
    responseFormat = {
        statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;
}