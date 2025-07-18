import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/filter-podcast-model';

const DEFAULT_CONTENT = { 'content-type': ContentType.JSON };

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));

    res.end()
};

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));

    res.end();

}