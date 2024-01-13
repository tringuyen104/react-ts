import * as React from "react";
import { useEffect, useState, ReactNode, useRef } from 'react';
import { resizeHeightForTextarea } from "../../common/commonUtils";

interface TextAreaProps {
  value: any,
  label: string,
  id: string,
  name: string,
  isResizeHeight: boolean,
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea = ({ value, label, id, name, isResizeHeight = true, onChange }: TextAreaProps) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef != null && isResizeHeight) {
      resizeHeightForTextarea(textRef.current);
    }
  }, [textRef, value])

  return (
    <div className="form-group">
      {
        label && <label htmlFor={id}>{label}</label>
      }
      <textarea
        id={id}
        ref={textRef}
        typeof="text"
        style={{ overflow: 'hidden', resize: 'none', overflowY: 'hidden', minHeight: 80}}
        name={name}
        className={'form-control'}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  )
}

export default TextArea;