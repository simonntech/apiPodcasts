import { IncomingMessage, ServerResponse } from 'http';


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'content-type': "application/json" });
    res.end(
        JSON.stringify(
            [
                {
                    podcastName: "Podcast 3 irmãos",
                    episode: "RUI COSTA PIMENTA - COMUNISMO RAIZ - PODCAST 3 IRMÃOS #785",
                    videoId: "FyP7-KMq17M",
                    category: ["humor", "politica"]
                },
                {
                    podcastName: "Podcast 3 irmãos",
                    episode: "JOSÉ KOBORI e JONES MANOEL - PODCAST 3 IRMÃOS #780",
                    videoId: "heJcy-ItTz8",
                    category: ["debate", "politica"]
                }

            ]
        )
    )
}