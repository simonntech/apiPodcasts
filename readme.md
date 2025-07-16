(estudo de API do curso do Felipão da DIO)  
# Application - Podcast Manager API  
Project with pure NodeJS and Typescript, without third-party libraries or frameworks

### Domain  
Video-based podcasts

### Description  
An app-style application that centralizes different podcast episodes separated by category

### Features  
- List podcast episodes in category sections: [debate, fitness, humor, politics]  
- Filter episodes by podcast name

## How to implement  
REST API (json)

### Feature:  
**GET**: List podcast episodes in category sections:  
- podcast name  
- episode name  
- video ID (noting during structuring that there is a video ID, which is common between the access link and the cover image)  
- cover image  
- access link  
- category

**RESPONSE:**

```js
[
    {
        podcastName: "Podcast name",
        episode: "Podcast episode",
        videoId: "video address, where the link and cover are",
        categories: ["array of categories"]
    }...
]
