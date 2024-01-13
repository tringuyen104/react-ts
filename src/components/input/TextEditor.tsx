import React, { useState } from 'react';
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

type TextEditorProps = {
    value: string;
    onChange: (value: any) => void;
};

const TextEditor = ({ value, onChange } : TextEditorProps) => {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
}

export default TextEditor;