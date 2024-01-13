import _ from "lodash";
import React, { useEffect, useState } from "react";

type WordsProps = {
    value: Words;
};

const Words = ({ value }: WordsProps) => {
    const [words, setWords] = useState<Array<Vocabulary>>([])
    useEffect(() => {
        if (_.isEmpty(value.words)) {
            var vocabularies = value.words.split("\n");
            var results = Array<Vocabulary>();
            vocabularies.forEach((item) => {
                let word = item.split("-");
                const vocabulary: Vocabulary = {
                    vocabulary: word[0],
                    ipa: word[1],
                    partOfSpeeches: word[2],
                };
                results.push(vocabulary);
            });
            setWords(results);
        }
    }, [value]);

    function renderWord(word: Vocabulary, index: number) {
        let wordColor = value.config?.wordColor ? value.config.wordColor : "black";
        let ipaColor = value.config?.ipaColor ? value.config.ipaColor : "red";
        let partOfSpeechColor = value.config?.partOfSpeechColor ? value.config.partOfSpeechColor : "blue";
        return <>
            <p style={{ color: wordColor }}>{word.vocabulary}</p>
            <p style={{ color: ipaColor }}>{word.ipa}</p>
            <p style={{ color: partOfSpeechColor }}>{word.partOfSpeeches}</p>
        </>
    }

    return <React.Fragment>
        <div className="">
            {
                words.map((word, index) => {
                    return <React.Fragment key={index}>
                        {renderWord(word, index)}
                    </React.Fragment>
                })
            }
        </div>
    </React.Fragment>;
};