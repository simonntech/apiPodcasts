(estudo de API do curso do Felipão da DIO)
# Aplicativo - API Gerenciador Podcast
Projeto com NodeJS puro, sem biblioteca de terceiros ou frameworks

### Domínio
Podcasts feito em vídeo

### Descrição
Aplicativo ao estilo Netflix, que possa centralizar diferentes episódios de podcasts separados por categoria

### Features
- Listar episódios dos podcasts em sessões de categorias:   [debate, fitness, humor, política]
- Filtrar episódios por nome de podcast

## Como implementar
API REST(json)

### Feature:
GET: Listar episódios dos podcasts em sessões de categorias: 
- nome do podcast
- nome do episódio
- video ID (observando durante a estruturação que existe um vídeo ID, que é comum entre o link de acesso e a imagem da capa)
- imagem de capa
- link de acesso
- categoria

RESPONSE:

    ```js
    [
        {
            podcastName: "Podcast 3 irmãos",
            episode: "RUI COSTA PIMENTA - COMUNISMO RAIZ - PODCAST 3 IRMÃOS #785",
            videoId: "FyP7-KMq17M",
            cover: "https://i.ytimg.com/vi/FyP7-KMq17M/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=FyP7-KMq17M",
            categories: ["humor", "política"]
        },
        {
            podcastName: "Podcast 3 irmãos",
            episode: "JOSÉ KOBORI e JONES MANOEL - PODCAST 3 IRMÃOS #780",
            videoId: "heJcy-ItTz8",
            cover: "https://i.ytimg.com/vi/heJcy-ItTz8/maxresdefault.jpg",
            link: "https://www.youtube.com/watch?v=heJcy-ItTz8",
            categories: ["debate", "política"]
        }

    ]
    ```

### Feature:
GET: Retorna lista de episódio baseado em um parâmetro enviado pelo cliente do nome do podcast: