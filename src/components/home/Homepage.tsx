import * as React from 'react';
import { useEffect, useState, ReactNode, useRef } from 'react';
import '../../types/Product';
import _ from 'lodash';
import TextEditor from '../input/TextEditor';
import { getAll } from '../../apis/words.api';
import { chetGetWords } from '../../apis/chat.api';
import TextArea from '../input/TextArea';
import ColorPicker from '../input/ColorPicker';

type HomePageProps = {
    message?: string,
    children?: ReactNode
}

const HomePage = ({ message, children }: HomePageProps) => {
    const [text, setText] = useState<string>();
    const [convertedText, setConvertedText] = useState<string>(`<span style="color:red;font-weight:bolder">Text</span>`);
    const [words, setWords] = useState<Words>();

    // useEffect(() => {
    //     getAll().then((res) => {
    //         setWords(res);
    //     })
    // }, []);

    function handleChangeTextEditor(value: string) {
        setConvertedText(value);
    }

    function handleChangeTextArea(event: any) {
        const { name, value } = event.target || event.currentTarget;
        setText(value);
    }

    function handleClickConvert(event: any) {
        event.preventDefault();
        if(_.isEmpty(text)) {return false;}
        chetGetWords(text).then((res) => {
            console.log(res);
        })
    }

    function handleClickColor(event: any) {
        event.preventDefault();

    }

    return (
        <div className='homepage'>
            <br />
            <div className='row'>
                <div className='col-sm-12'>
                    <ColorPicker onClick={handleClickColor} />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <TextArea
                        value={text}
                        id='textArea'
                        name='textArea'
                        label=''
                        isResizeHeight={true}
                        onChange={handleChangeTextArea}
                    />
                </div>
                <div className='col-sm-2 text-center'>
                    <button type='button' className='btn btn-primary' onClick={handleClickConvert}>
                        Convert
                    </button>
                </div>
                <div className='col-sm-4 flex-end'>
                    <TextEditor value={convertedText} onChange={handleChangeTextEditor} />
                </div>
            </div>

            {/* <button type='button' onClick={handleClickConvert} /> */}
        </div>
    )
}

export default HomePage;