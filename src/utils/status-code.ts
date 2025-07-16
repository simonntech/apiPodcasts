export enum statusCode {
    // 2xx: Sucesso
    OK = 200,                            // Requisição bem-sucedida
    CREATED = 201,                       // Recurso criado com sucesso
    ACCEPTED = 202,                      // Requisição aceita para processamento
    NO_CONTENT = 204,                    // Sucesso, mas sem conteúdo na resposta

    // 3xx: Redirecionamento
    MOVED_PERMANENTLY = 301,            // Recurso movido permanentemente para nova URL
    FOUND = 302,                        // Recurso encontrado em outra URL temporariamente
    SEE_OTHER = 303,                   // Veja outro recurso (usado após POST)
    NOT_MODIFIED = 304,               // Recurso não foi modificado desde a última requisição
    TEMPORARY_REDIRECT = 307,         // Redirecionamento temporário, método mantido
    PERMANENT_REDIRECT = 308,         // Redirecionamento permanente, método mantido

    // 4xx: Erros do cliente
    BAD_REQUEST = 400,                  // Requisição malformada
    UNAUTHORIZED = 401,                // Autenticação necessária
    PAYMENT_REQUIRED = 402,            // Pagamento necessário (raramente usado)
    FORBIDDEN = 403,                   // Acesso proibido
    NOT_FOUND = 404,                   // Recurso não encontrado
    METHOD_NOT_ALLOWED = 405,         // Método HTTP não permitido
    CONFLICT = 409,                    // Conflito com o estado atual do recurso
    GONE = 410,                        // Recurso não está mais disponível
    UNSUPPORTED_MEDIA_TYPE = 415,     // Tipo de mídia não suportado
    UNPROCESSABLE_ENTITY = 422,       // Entidade semântica inválida

    // 5xx: Erros do servidor
    INTERNAL_SERVER_ERROR = 500,       // Erro interno do servidor
    NOT_IMPLEMENTED = 501,            // Funcionalidade não implementada
    BAD_GATEWAY = 502,                // Gateway inválido
    SERVICE_UNAVAILABLE = 503,        // Serviço indisponível
    GATEWAY_TIMEOUT = 504             // Tempo de resposta do gateway expirado
}
