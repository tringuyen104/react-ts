import React, { useRef, useState } from "react";
import { usePopper } from 'react-popper';
import { SketchPicker, BlockPicker, ChromePicker } from "react-color";
import { Portal } from 'react-portal';
import Tooltip from './Tooltip';

type ColorPickerProps = {
    text?: string,
    size?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ColorPicker = ({ text, onClick }: ColorPickerProps) => {
    const [isShow, setIsShow] = useState<boolean>();
    const container = useRef(null);
    const tool = useRef(null);
    const [color, setColor] = useState<any>({
        background: '#fff',
    });

    const handleChangeColor = (color: any) => {
        setColor({ background: color });
        console.log(color);
    };
    const renderTrigger = (): React.ReactNode => {
        return <div className="color-picker__button" onClick={(e) => { e.preventDefault(); setIsShow(!isShow); }}>
            <div color={color.background}></div>
        </div>
    }
    const renderContent = (): React.ReactNode => {
        return <>{
            <div className="color-picker__popup">
                <div className="color-picker__popup__content">
                    <ChromePicker
                        color={color.background}
                        onChangeComplete={handleChangeColor}
                        onChange={handleChangeColor}
                        disableAlpha={true}
                    />
                </div>
            </div>
        }
        </>

    }
    return (
        <div className="color-picker">
            <Tooltip
                trigger={renderTrigger()}
                placement="top" >
                {renderContent()}
            </Tooltip>
        </div >
    );

};
export default ColorPicker;