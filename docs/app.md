(estudo de API do curso do Felipão da DIO)
# Aplicativo - API Gerenciador Podcast
Projeto com NodeJS puro e Typescript, sem biblioteca de terceiros ou frameworks

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
            podcastName: "Nome do podcast",
            episode: "Episódio Podcast",
            videoId: "endereço do vídeo, onde vai ter o link e capa",
            categories: ["vetor de categorias"]
        }...

    ]
    ```

### Feature:
GET: Retorna lista de episódio baseado em um parâmetro enviado pelo cliente do nome do podcast: