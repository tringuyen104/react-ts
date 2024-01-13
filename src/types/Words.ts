type Words = {
    id?: number | null,
    words: string,
    userId?: string,
    title?: string,
    config?: WordsNoteConfig
}

type WordsNoteConfig = {
    id?: number,
    wordColor?: string,
    ipaColor?: string,
    partOfSpeechColor?: string,
}

type Vocabulary = {
    vocabulary: string,
    partOfSpeeches: string,
    ipa: string,
}

type PartOfSpeech = {
    description: string,
    definition: string
}

type ChatMessage = {
    role: string,
    message: string
}

type ChatRequest = {
    messages: string
}