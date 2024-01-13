let urlWords = 'api/v1/wordsNote';
let urlChat = 'api/v1/chat';
export const UrlUtils = {
    // words
    getWordsUrl(): string {
        return urlWords;
    },
    getWordById(id: number): string {
        return `${urlWords}/${id}`;
    },
    
    // chat
    getChatUrl(): string {
        return urlChat;
    },
    getChatById(id: number): string {
        return `${urlChat}/${id}`;
    },
};

export default UrlUtils;