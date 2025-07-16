export enum ContentType {
    // Formato JSON, amplamente usado em APIs
    JSON = "application/json",

    // Formulário tradicional (enviado por HTML forms padrão)
    FORM_URLENCODED = "application/x-www-form-urlencoded",

    // Envio de arquivos ou dados binários (como imagens)
    FORM_DATA = "multipart/form-data",

    // Texto simples (sem formatação)
    TEXT = "text/plain",

    // HTML (usado para páginas da web)
    HTML = "text/html",

    // Arquivo XML (usado em sistemas legados e alguns serviços)
    XML = "application/xml",

    // Arquivo JavaScript (scripts para páginas web)
    JAVASCRIPT = "application/javascript",

    // Arquivo CSS (folhas de estilo)
    CSS = "text/css",

    // Arquivo CSV (planilhas de texto)
    CSV = "text/csv",

    // Stream genérico de bytes (útil para downloads)
    OCTET_STREAM = "application/octet-stream",

    // WebAssembly
    WASM = "application/wasm"
}
